/**
 * Image optimization utilities for better performance
 */

/**
 * Lazy load images using Intersection Observer
 */
export function setupLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach((img) => {
      imageObserver.observe(img);
    });
  }
}

/**
 * Defer non-critical JavaScript execution
 */
export function deferTask(callback: () => void, delay: number = 0) {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => callback(), { timeout: delay });
  } else {
    setTimeout(callback, delay);
  }
}

/**
 * Preload images for better perceived performance
 */
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
}

/**
 * Break up long tasks to prevent INP issues
 */
export function breakUpTask(
  tasks: (() => void)[],
  chunkSize: number = 1
): Promise<void> {
  return new Promise((resolve) => {
    let index = 0;

    function processChunk() {
      const end = Math.min(index + chunkSize, tasks.length);
      for (let i = index; i < end; i++) {
        tasks[i]();
      }
      index = end;

      if (index < tasks.length) {
        if ('requestIdleCallback' in window) {
          requestIdleCallback(processChunk);
        } else {
          setTimeout(processChunk, 0);
        }
      } else {
        resolve();
      }
    }

    processChunk();
  });
}
