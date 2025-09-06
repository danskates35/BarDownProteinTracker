import Hero from "@/components/Hero";
import Features from "@/components/Features";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      
      {/* CTA Section */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of developers who are already building amazing things with our platform.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-elegant transition-smooth px-12 py-6 text-lg shadow-soft"
          >
            Start Building Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
