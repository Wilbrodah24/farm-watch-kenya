import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { MarketTracker } from "@/components/MarketTracker";
import { PriceChart } from "@/components/PriceChart";
import { WeatherWidget } from "@/components/WeatherWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      
      <div className="container mx-auto px-4 py-12 space-y-12">
        <MarketTracker />
        
        <div className="grid gap-8 lg:grid-cols-2">
          <PriceChart />
          <WeatherWidget />
        </div>
        
        <footer className="text-center py-8 border-t border-border">
          <p className="text-muted-foreground">
            © 2024 AgriMarket - Empowering African Farmers with Smart Technology
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
