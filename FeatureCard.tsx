import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="group hover:shadow-elegant transition-smooth cursor-pointer border-border/50 bg-card/80 backdrop-blur-sm">
      <CardHeader className="text-center pb-4">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-smooth shadow-soft">
          <Icon className="h-8 w-8 text-primary-foreground" />
        </div>
        <CardTitle className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-smooth">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;