import { Button } from "@/components/ui/button";
import { Sprout, BarChart3, Cloud, Bell, Menu } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <Sprout className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">AgriMarket</span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" className="flex items-center space-x-2">
              <BarChart3 className="h-4 w-4" />
              <span>Markets</span>
            </Button>
            <Button variant="ghost" className="flex items-center space-x-2">
              <Cloud className="h-4 w-4" />
              <span>Weather</span>
            </Button>
            <Button variant="ghost" className="flex items-center space-x-2">
              <Bell className="h-4 w-4" />
              <span>Alerts</span>
            </Button>
            <Button className="bg-gradient-primary hover:bg-primary-glow">
              Get Started
            </Button>
          </div>

          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" className="justify-start">
                <BarChart3 className="h-4 w-4 mr-2" />
                Markets
              </Button>
              <Button variant="ghost" className="justify-start">
                <Cloud className="h-4 w-4 mr-2" />
                Weather
              </Button>
              <Button variant="ghost" className="justify-start">
                <Bell className="h-4 w-4 mr-2" />
                Alerts
              </Button>
              <Button className="bg-gradient-primary hover:bg-primary-glow mt-4">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};