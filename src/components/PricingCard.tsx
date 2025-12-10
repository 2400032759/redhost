import { Check, ArrowRight, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

type FeatureType = string | { label: string; included: boolean };

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: FeatureType[];
  isPopular?: boolean;
}

const PricingCard = ({ title, price, description, features, isPopular }: PricingCardProps) => {
  return (
    <Card className={`relative overflow-visible transition-all duration-500 hover:scale-[1.02] group h-full flex flex-col border-0 ${isPopular
      ? "bg-red-900/10 shadow-[0_0_50px_-10px_rgba(220,38,38,0.4)] ring-1 ring-red-500/60 scale-[1.03] z-10"
      : "bg-white/5 hover:bg-white/10 shadow-xl ring-1 ring-white/10 hover:ring-white/20"
      }`}>

      {/* Soft Global Gradient Behind Card - Premium Glass feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50 pointer-events-none rounded-[inherit]" />

      {isPopular && (
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#D92626] to-[#B30000] rounded-t-[inherit]" />
      )}

      <CardHeader className="text-center pb-6 pt-10 relative z-10">
        {isPopular && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#D92626] to-[#B30000] text-white px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-lg shadow-[#D92626]/40">
            Most Popular
          </div>
        )}
        <CardTitle className={`text-xl font-bold font-sans tracking-tight ${isPopular ? "text-red-400" : "text-foreground"}`}>
          {title}
        </CardTitle>
        <CardDescription className="mt-2 font-sans text-sm text-muted-foreground/80">{description}</CardDescription>
        <div className="mt-6 flex items-baseline justify-center gap-1">
          {/* Reduced font size for premium feel */}
          <span className="text-4xl font-bold font-sans tracking-tight text-foreground transition-colors duration-300">
            {price}
          </span>
          <span className="text-muted-foreground font-sans text-lg">/-</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 flex-grow relative z-10 px-8">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
        {features.map((feature, index) => {
          const isString = typeof feature === "string";
          const label = isString ? feature : feature.label;
          const isIncluded = isString ? true : feature.included;

          return (
            <div key={index} className="flex items-start gap-3 group/item">
              <div className={`mt-1 p-0.5 rounded-full ${isIncluded ? "bg-blue-500/10 text-blue-400" : "bg-transparent text-muted-foreground/30"}`}>
                {isIncluded ? <Check className="h-3 w-3 stroke-[3]" /> : <Minus className="h-3 w-3" />}
              </div>
              <span className={`text-sm font-sans transition-colors duration-300 ${isIncluded ? "text-muted-foreground group-hover/item:text-foreground" : "text-muted-foreground/40"}`}>
                {label}
              </span>
            </div>
          );
        })}
      </CardContent>

      <CardFooter className="pt-6 pb-8 px-8 relative z-10 mt-auto">
        <Link to="/quotation" className="w-full">
          <Button
            variant={isPopular ? "default" : "outline"}
            className={`w-full h-12 text-base font-medium font-sans tracking-wide transition-all duration-300 rounded-lg ${isPopular
              ? "bg-gradient-to-r from-[#D92626] to-[#B30000] hover:from-[#FF4D4D] hover:to-[#CC0000] shadow-lg shadow-[#D92626]/40 text-white border-0 hover:scale-[1.02]"
              : "border-white/10 hover:border-white/20 hover:bg-white/5 text-muted-foreground hover:text-white"
              }`}
          >
            Get Started
            {isPopular && <ArrowRight className="ml-2 h-4 w-4 opacity-70 group-hover:translate-x-1 transition-transform" />}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;