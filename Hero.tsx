import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-primary opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Build Something
          <span className="block bg-gradient-to-r from-primary-glow to-white bg-clip-text text-transparent">
            Amazing
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Start with a beautiful foundation and create the app of your dreams. 
          Clean, modern, and ready to customize.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm shadow-elegant transition-smooth px-8 py-6 text-lg"
          >
            Get Started
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-smooth px-8 py-6 text-lg"
          >
            Learn More
          </Button>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-primary-glow/20 rounded-full blur-2xl animate-pulse delay-1000" />
    </section>
  );
};

export default Hero;