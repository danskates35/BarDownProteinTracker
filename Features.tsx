import { Rocket, Palette, Zap, Shield } from "lucide-react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const features = [
    {
      icon: Rocket,
      title: "Fast & Modern",
      description: "Built with the latest technologies for optimal performance and developer experience."
    },
    {
      icon: Palette,
      title: "Beautiful Design",
      description: "Thoughtfully crafted components with a modern design system that's easy to customize."
    },
    {
      icon: Zap,
      title: "Easy to Use",
      description: "Simple, intuitive interface that gets you up and running in minutes, not hours."
    },
    {
      icon: Shield,
      title: "Reliable",
      description: "Built on proven technologies with best practices for security and maintainability."
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A comprehensive foundation with all the essential features to build your next amazing project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;