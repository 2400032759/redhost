import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const PricingCard = ({ title, price, description, features, isPopular }: PricingCardProps) => {
  return (
    <Card className={`relative shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 ${
      isPopular ? "border-2 border-primary shadow-glow" : ""
    }`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </div>
      )}
      <CardHeader className="text-center pb-8 pt-8">
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription className="mt-2">{description}</CardDescription>
        <div className="mt-4">
          <span className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            {price}
          </span>
          <span className="text-muted-foreground ml-1">/-</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="p-1 bg-primary/10 rounded-full">
              <Check className="h-4 w-4 text-primary" />
            </div>
            <span className="text-sm text-card-foreground">{feature}</span>
          </div>
        ))}
      </CardContent>
      <CardFooter className="pt-4">
        <Link to="/quotation" className="w-full">
          <Button 
            variant={isPopular ? "hero" : "default"} 
            size="lg" 
            className="w-full"
          >
            Get Started
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;