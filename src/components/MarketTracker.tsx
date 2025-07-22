import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Calendar, MapPin, Smartphone, AlertTriangle } from "lucide-react";

interface MarketData {
  crop: string;
  currentPrice: number;
  weeklyChange: number;
  demandLevel: "high" | "medium" | "low";
  bestSellingDays: string[];
  region: string;
  recommendation: string;
}

const sampleMarketData: MarketData[] = [
  {
    crop: "Maize",
    currentPrice: 4500,
    weeklyChange: 12.5,
    demandLevel: "high",
    bestSellingDays: ["Tuesday", "Friday"],
    region: "Central Kenya",
    recommendation: "Strong buy signal - prices trending up"
  },
  {
    crop: "Coffee",
    currentPrice: 8200,
    weeklyChange: -5.2,
    demandLevel: "medium",
    bestSellingDays: ["Monday", "Wednesday"],
    region: "Kiambu County",
    recommendation: "Hold - wait for better prices next week"
  },
  {
    crop: "Tea",
    currentPrice: 6800,
    weeklyChange: 8.1,
    demandLevel: "high",
    bestSellingDays: ["Thursday", "Saturday"],
    region: "Kericho County",
    recommendation: "Excellent selling opportunity"
  },
  {
    crop: "Avocado",
    currentPrice: 12000,
    weeklyChange: 18.7,
    demandLevel: "high",
    bestSellingDays: ["Wednesday", "Friday"],
    region: "Murang'a County",
    recommendation: "Peak season - sell immediately"
  }
];

export const MarketTracker = () => {
  const [selectedCrop, setSelectedCrop] = useState<string | null>(null);

  const getDemandColor = (level: string) => {
    switch (level) {
      case "high": return "bg-success text-success-foreground";
      case "medium": return "bg-warning text-warning-foreground";
      case "low": return "bg-destructive text-destructive-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getTrendIcon = (change: number) => {
    return change > 0 ? 
      <TrendingUp className="h-4 w-4 text-success" /> : 
      <TrendingDown className="h-4 w-4 text-destructive" />;
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
          Market Timing Tracker
        </h2>
        <p className="text-muted-foreground">Real-time market insights for African farmers</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        {sampleMarketData.map((data, index) => (
          <Card key={index} className="p-6 shadow-card hover:shadow-farm transition-all duration-300 border-l-4 border-l-primary">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-foreground">{data.crop}</h3>
                <Badge className={getDemandColor(data.demandLevel)}>
                  {data.demandLevel} demand
                </Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-primary">
                  KES {data.currentPrice.toLocaleString()}/bag
                </div>
                <div className="flex items-center space-x-2">
                  {getTrendIcon(data.weeklyChange)}
                  <span className={`font-medium ${data.weeklyChange > 0 ? 'text-success' : 'text-destructive'}`}>
                    {data.weeklyChange > 0 ? '+' : ''}{data.weeklyChange}%
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{data.region}</span>
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Best days: {data.bestSellingDays.join(", ")}</span>
                </div>
              </div>

              <div className="bg-muted p-3 rounded-lg">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="h-4 w-4 text-accent mt-0.5" />
                  <p className="text-sm text-foreground">{data.recommendation}</p>
                </div>
              </div>

              <Button 
                className="w-full bg-gradient-primary hover:bg-primary-glow transition-all duration-300"
                onClick={() => setSelectedCrop(data.crop)}
              >
                <Smartphone className="mr-2 h-4 w-4" />
                Get SMS Alerts
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-8 p-6 bg-gradient-harvest rounded-lg shadow-farm">
        <h3 className="text-xl font-bold text-accent-foreground mb-4">Market Insights</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="text-center">
            <div className="text-2xl font-bold text-accent-foreground">87%</div>
            <div className="text-sm text-accent-foreground/80">Farmers using timing data</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent-foreground">+23%</div>
            <div className="text-sm text-accent-foreground/80">Average profit increase</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent-foreground">15</div>
            <div className="text-sm text-accent-foreground/80">Markets tracked</div>
          </div>
        </div>
      </div>
    </div>
  );
};