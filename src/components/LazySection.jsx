import React, { useState, useEffect, useRef } from 'react';

export default function LazySection({ children, height = '300px' }) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '350px 0px' } // Load 350px before entering viewport for a seamless experience
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ minHeight: inView ? 'auto' : height }}>
      {inView ? children : (
        <div className="w-full h-full min-h-[300px] flex items-center justify-center bg-slate-50/50 rounded-xl animate-pulse">
          <div className="w-12 h-12 border-2 border-brand-green/20 border-t-brand-green rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}
