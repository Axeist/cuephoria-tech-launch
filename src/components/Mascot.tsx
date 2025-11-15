import { lazy, Suspense } from "react";

// Lazy load Spline for better performance
const Spline = lazy(() => import('@splinetool/react-spline'));

const Mascot = () => {
  return (
    <div 
      className="fixed bottom-4 right-4 z-50 w-48 h-48 md:w-64 md:h-64 pointer-events-none"
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

