import { useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

const StatCard = ({ value, suffix, label, prefix = "" }: StatProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCount(Math.min(Math.round(stepValue * currentStep), value));

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <Card
      ref={ref}
      className="p-8 text-center bg-card/80 backdrop-blur-sm border-primary/20 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105"
    >
      <div className="text-5xl md:text-6xl font-bold text-primary mb-3">
        {prefix}
        {count}
        {suffix}
      </div>
      <p className="text-lg text-muted-foreground">{label}</p>
    </Card>
  );
};

const StatsSection = () => {
  return (
    <section id="stats-section" className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Water Crisis in Numbers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding the scale of the challenge helps us appreciate the urgency of conservation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard value={2} suffix=" billion" label="People lack safe drinking water" />
          <StatCard value={70} suffix="%" label="Of Earth's surface is water" />
          <StatCard value={3} suffix="%" label="Of water is freshwater" />
          <StatCard value={90} suffix="%" label="Of wastewater is untreated" />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
