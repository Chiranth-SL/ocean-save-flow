import { Card } from "@/components/ui/card";
import { Droplet, Bath, Leaf, Timer, Recycle, Sun } from "lucide-react";

const tips = [
  {
    icon: Droplet,
    title: "Fix Leaks Immediately",
    description: "A dripping faucet can waste up to 3,000 gallons per year. Regular maintenance saves water and money.",
  },
  {
    icon: Bath,
    title: "Shorter Showers",
    description: "Reduce shower time by 2 minutes to save up to 10 gallons per shower. Every minute counts.",
  },
  {
    icon: Timer,
    title: "Turn Off Taps",
    description: "Don't let water run while brushing teeth or washing dishes. Save up to 8 gallons per day.",
  },
  {
    icon: Leaf,
    title: "Water Plants Wisely",
    description: "Water gardens during early morning or evening to minimize evaporation and maximize absorption.",
  },
  {
    icon: Recycle,
    title: "Reuse Water",
    description: "Collect rainwater for plants and reuse cooking water when possible. Every drop matters.",
  },
  {
    icon: Sun,
    title: "Install Efficient Fixtures",
    description: "Low-flow showerheads and faucets can reduce water usage by up to 60% without sacrificing pressure.",
  },
];

const TipsSection = () => {
  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple Ways to Conserve Water
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Small changes in daily habits can make a significant impact on water conservation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card border-primary/20 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{tip.title}</h3>
                <p className="text-muted-foreground">{tip.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TipsSection;
