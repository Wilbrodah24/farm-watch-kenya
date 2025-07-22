import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Smartphone, Users, BarChart3 } from "lucide-react";
import heroImage from "@/assets/hero-farmers.jpg";

export const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-primary">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="African farmers with technology" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Smart Market Timing for
              <span className="block text-accent"> African Farmers</span>
            </h1>
            
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Maximize your profits with real-time market data, price predictions, and optimal selling recommendations tailored for Kenyan and African agriculture.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                <Smartphone className="mr-2 h-5 w-5" />
                Start Tracking Markets
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="p-6 bg-card/90 backdrop-blur-sm shadow-card">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-success rounded-lg">
                  <TrendingUp className="h-6 w-6 text-success-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">+24%</div>
                  <div className="text-sm text-muted-foreground">Profit Increase</div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-card/90 backdrop-blur-sm shadow-card">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-accent rounded-lg">
                  <Users className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">50K+</div>
                  <div className="text-sm text-muted-foreground">Active Farmers</div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-card/90 backdrop-blur-sm shadow-card sm:col-span-2">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary rounded-lg">
                  <BarChart3 className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">Real-time Data</div>
                  <div className="text-sm text-muted-foreground">15 major markets across Kenya & East Africa</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};