import { useEffect, useRef } from 'react';

const FloatingElements = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const elements = containerRef.current?.querySelectorAll('.float-element');
      elements?.forEach((element, index) => {
        const speed = (index + 1) * 0.01;
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        
        (element as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <div className="float-element absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl transition-transform duration-1000 ease-out" />
      <div className="float-element absolute top-40 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl transition-transform duration-1000 ease-out" />
      <div className="float-element absolute bottom-20 left-1/3 w-80 h-80 bg-secondary/20 rounded-full blur-3xl transition-transform duration-1000 ease-out" />
      <div className="float-element absolute top-1/2 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl transition-transform duration-1000 ease-out" />
    </div>
  );
};

export default FloatingElements;
