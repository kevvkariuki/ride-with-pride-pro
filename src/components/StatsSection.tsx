import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 4, suffix: "+", label: "MGR Editions" },
  { value: 30, suffix: "+", label: "Students Supported" },
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 1000, suffix: "+ km", label: "Ultra Rides" },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = value;
          const duration = 2000;
          const increment = end / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold">
      {count}{suffix}
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 px-6 md:px-[10%] bg-card">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 border-l-4 border-primary pl-4 text-foreground">
        Highlights
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="bg-primary text-primary-foreground p-8 rounded-xl text-center hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            <p className="mt-2 text-primary-foreground/90">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
