import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const initiatives = [
  {
    title: "UN Water Action Decade",
    location: "Global",
    description: "A decade-long initiative to accelerate efforts towards meeting water-related challenges including water scarcity and access to safe water and sanitation.",
    impact: "Reached 2 billion people",
    color: "bg-primary",
  },
  {
    title: "Singapore's NEWater",
    location: "Singapore",
    description: "Advanced water recycling technology that purifies used water into ultra-clean, high-grade reclaimed water, meeting 40% of the country's water needs.",
    impact: "40% water independence",
    color: "bg-secondary",
  },
  {
    title: "Israel's Drip Irrigation",
    location: "Israel",
    description: "Revolutionary precision irrigation system that delivers water directly to plant roots, reducing water usage by up to 70% while increasing crop yields.",
    impact: "70% water savings",
    color: "bg-accent",
  },
  {
    title: "Australia's Water Grid",
    location: "Australia",
    description: "Integrated water supply network connecting dams, desalination plants, and recycled water sources to ensure sustainable water security.",
    impact: "Drought-proof cities",
    color: "bg-primary",
  },
];

const InitiativesSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Global Water Conservation Initiatives
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Inspiring examples of innovation and commitment from around the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {initiatives.map((initiative, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-primary/20 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-[1.02] group overflow-hidden relative"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${initiative.color} opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`} />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-foreground">{initiative.title}</h3>
                  <Badge variant="secondary" className="text-xs">
                    {initiative.location}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {initiative.description}
                </p>
                
                <div className="flex items-center gap-2 pt-4 border-t border-primary/10">
                  <div className={`w-2 h-2 ${initiative.color} rounded-full animate-pulse`} />
                  <span className="text-sm font-semibold text-primary">
                    {initiative.impact}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InitiativesSection;
