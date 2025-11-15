import { lazy, Suspense, useEffect, useRef, useState } from "react";

// Lazy load Spline for better performance
const Spline = lazy(() => import('@splinetool/react-spline'));

const Mascot = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

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
    // Hide Spline watermark after component loads
    const hideWatermark = () => {
      if (containerRef.current) {
        // Find and hide any links or elements with Spline attribution
        const links = containerRef.current.querySelectorAll('a[href*="spline"], a[href*="splinetool"]');
        links.forEach(link => {
          (link as HTMLElement).style.display = 'none';
          (link as HTMLElement).style.visibility = 'hidden';
          (link as HTMLElement).style.opacity = '0';
        });

        // Also check for any text containing "Built with" or "Made with"
        const walker = document.createTreeWalker(
          containerRef.current,
          NodeFilter.SHOW_TEXT,
          null
        );
        let node;
        while (node = walker.nextNode()) {
          if (node.textContent?.includes('Built with Spline') || 
              node.textContent?.includes('Made with Spline')) {
            const parent = node.parentElement;
            if (parent) {
              parent.style.display = 'none';
            }
          }
        }
      }
    };

    // Run immediately and also after a delay to catch dynamically added elements
    hideWatermark();
    const interval = setInterval(hideWatermark, 500);
    
    return () => clearInterval(interval);
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
      }}
    >
      <Suspense fallback={null}>
        <div className="relative w-full h-full">
          <Spline 
            scene="https://prod.spline.design/JW4c8s7goFnZN-mv/scene.splinecode"
            className="w-full h-full"
            style={{
              // Optimize for performance
              willChange: 'transform',
            }}
          />
        </div>
      </Suspense>
    </div>
  );
};

export default Mascot;

