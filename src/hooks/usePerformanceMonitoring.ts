import { useEffect } from 'react';

/**
 * Hook to monitor and report Core Web Vitals
 */
export function usePerformanceMonitoring() {
  useEffect(() => {
    // Monitor Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // Monitor Interaction to Next Paint (INP)
        const inpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            console.log('INP:', entry.duration);
          });
        });
        inpObserver.observe({ entryTypes: ['event'] });

        return () => {
          lcpObserver.disconnect();
          inpObserver.disconnect();
        };
      } catch (e) {
        console.error('Performance monitoring error:', e);
      }
    }
  }, []);
}

/**
 * Measure component render time
 */
export function measureComponentRender(componentName: string) {
  const startTime = performance.now();
  return () => {
    const endTime = performance.now();
    console.log(`${componentName} render time: ${(endTime - startTime).toFixed(2)}ms`);
  };
}
