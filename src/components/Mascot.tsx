import { lazy, Suspense, useEffect, useRef, useState } from "react";

// Lazy load Spline for better performance
const Spline = lazy(() => import('@splinetool/react-spline'));

const Mascot = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [bgColor, setBgColor] = useState('hsl(var(--background))');

  useEffect(() => {
    // Detect mobile and hide mascot on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Dynamically get background color to match seamlessly
    const updateBgColor = () => {
      if (containerRef.current) {
        const computedStyle = getComputedStyle(document.documentElement);
        const bg = computedStyle.getPropertyValue('--background').trim();
        if (bg) {
          setBgColor(`hsl(${bg})`);
        }
        
        // Also try to get the actual background from body
        const bodyStyle = getComputedStyle(document.body);
        const bodyBg = bodyStyle.backgroundColor;
        if (bodyBg && bodyBg !== 'rgba(0, 0, 0, 0)') {
          setBgColor(bodyBg);
        }
      }
    };

    updateBgColor();
    // Update on scroll to catch any background changes
    window.addEventListener('scroll', updateBgColor, { passive: true });
    window.addEventListener('resize', updateBgColor);
    
    return () => {
      window.removeEventListener('scroll', updateBgColor);
      window.removeEventListener('resize', updateBgColor);
    };
  }, []);

  useEffect(() => {
    // Aggressively hide Spline watermark
    const hideWatermark = () => {
      // Search entire document, not just container
      const allLinks = document.querySelectorAll('a');
      allLinks.forEach(link => {
        const href = link.getAttribute('href') || '';
        const text = link.textContent || '';
        if (href.includes('spline') || href.includes('splinetool') || 
            text.includes('Built with') || text.includes('Made with') ||
            text.includes('Spline')) {
          (link as HTMLElement).style.cssText = 'display: none !important; visibility: hidden !important; opacity: 0 !important; position: absolute !important; left: -9999px !important; pointer-events: none !important; width: 0 !important; height: 0 !important;';
          try {
            link.remove();
          } catch (e) {
            // Ignore if can't remove
          }
        }
      });

      // Find and remove any divs containing Spline attribution
      const allDivs = document.querySelectorAll('div');
      allDivs.forEach(div => {
        const text = div.textContent || '';
        if (text.includes('Built with Spline') || text.includes('Made with Spline') ||
            text.includes('Built with') && text.includes('Spline')) {
          (div as HTMLElement).style.cssText = 'display: none !important; visibility: hidden !important; opacity: 0 !important; width: 0 !important; height: 0 !important;';
          try {
            div.remove();
          } catch (e) {
            // Ignore if can't remove
          }
        }
      });

      // Hide any iframes that might contain the watermark
      const iframes = document.querySelectorAll('iframe');
      iframes.forEach(iframe => {
        try {
          // Try to access iframe content (may fail due to CORS)
          const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
          if (iframeDoc) {
            const iframeLinks = iframeDoc.querySelectorAll('a');
            iframeLinks.forEach(link => {
              const text = link.textContent || '';
              if (text.includes('Built with') || text.includes('Spline')) {
                (link as HTMLElement).style.cssText = 'display: none !important;';
              }
            });
          }
        } catch (e) {
          // CORS - can't access iframe content, that's okay
        }
      });

      // Target any element with Spline in class/id
      const splineElements = document.querySelectorAll('[class*="spline"], [id*="spline"]');
      splineElements.forEach(el => {
        const text = el.textContent || '';
        if (text.includes('Built with') || text.includes('Made with')) {
          (el as HTMLElement).style.cssText = 'display: none !important; visibility: hidden !important; opacity: 0 !important;';
        }
      });
    };

    // Run immediately
    hideWatermark();
    
    // Use MutationObserver to catch dynamically added elements
    const observer = new MutationObserver(() => {
      hideWatermark();
    });

    // Observe the entire document for changes
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: false,
    });

    // Also run on interval as backup - more frequent
    const interval = setInterval(hideWatermark, 50);
    
    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  // Don't render on mobile
  if (isMobile) {
    return null;
  }

  return (
    <div 
      ref={containerRef}
      className="fixed bottom-4 right-4 z-50 w-48 h-48 md:w-64 md:h-64 pointer-events-none hidden md:block"
      style={{
        // Ensure it doesn't block interactions
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      <Suspense fallback={null}>
        <div className="relative w-full h-full" style={{ overflow: 'hidden' }}>
          <Spline 
            scene="https://prod.spline.design/JW4c8s7goFnZN-mv/scene.splinecode"
            className="w-full h-full"
            style={{
              // Optimize for performance
              willChange: 'transform',
            }}
          />
          {/* Overlay to hide watermark in bottom right corner - seamless blend */}
          <div 
            ref={overlayRef}
            className="absolute bottom-0 right-0 pointer-events-none"
            style={{
              zIndex: 99999,
              width: '140px',
              height: '35px',
              background: bgColor,
              backgroundImage: `linear-gradient(to top, ${bgColor} 0%, ${bgColor} 70%, transparent 100%)`,
              borderRadius: '8px 0 0 0',
              transition: 'background-color 0.3s ease',
            }}
          />
        </div>
      </Suspense>
      {/* Additional overlay div to cover watermark area - outside Spline container */}
      <div 
        className="absolute bottom-0 right-0 pointer-events-none"
        style={{
          zIndex: 100000,
          width: '150px',
          height: '40px',
          background: bgColor,
          backgroundImage: `linear-gradient(to top, ${bgColor} 0%, ${bgColor} 80%, transparent 100%)`,
          transition: 'background-color 0.3s ease',
        }}
      />
    </div>
  );
};

export default Mascot;

