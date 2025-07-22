import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Sun, CloudRain, Wind, Thermometer, Droplets } from "lucide-react";

const weatherData = {
  location: "Nairobi, Kenya",
  current: {
    temp: 24,
    condition: "Partly Cloudy",
    humidity: 65,
    windSpeed: 12,
    rainfall: 2.5
  },
  forecast: [
    { day: "Today", icon: "partly-cloudy", temp: 24, rain: 20 },
    { day: "Tomorrow", icon: "sunny", temp: 27, rain: 5 },
    { day: "Wed", icon: "rainy", temp: 22, rain: 80 },
    { day: "Thu", icon: "sunny", temp: 26, rain: 10 },
    { day: "Fri", icon: "partly-cloudy", temp: 25, rain: 30 }
  ],
  farmingTip: "Good conditions for harvesting. Light rain expected midweek - ideal for newly planted crops."
};

const getWeatherIcon = (condition: string) => {
  switch (condition) {
    case "sunny": return <Sun className="h-6 w-6 text-yellow-500" />;
    case "rainy": return <CloudRain className="h-6 w-6 text-blue-500" />;
    case "partly-cloudy": return <Cloud className="h-6 w-6 text-gray-500" />;
    default: return <Sun className="h-6 w-6 text-yellow-500" />;
  }
};

export const WeatherWidget = () => {
  return (
    <Card className="p-6 shadow-card">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-foreground">Weather Forecast</h3>
          <Badge variant="outline" className="text-muted-foreground">
            {weatherData.location}
          </Badge>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="space-y-4">
            <div className="text-center">
              <Cloud className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
              <div className="text-3xl font-bold text-foreground">{weatherData.current.temp}°C</div>
              <div className="text-sm text-muted-foreground">{weatherData.current.condition}</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Thermometer className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Temperature</span>
              </div>
              <span className="text-sm font-medium">{weatherData.current.temp}°C</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Droplets className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Humidity</span>
              </div>
              <span className="text-sm font-medium">{weatherData.current.humidity}%</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Wind className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Wind Speed</span>
              </div>
              <span className="text-sm font-medium">{weatherData.current.windSpeed} km/h</span>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-foreground mb-3">5-Day Forecast</h4>
            {weatherData.forecast.map((day, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  {getWeatherIcon(day.icon)}
                  <span className="text-muted-foreground">{day.day}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-medium">{day.temp}°C</span>
                  <span className="text-blue-500">{day.rain}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-growth p-4 rounded-lg">
          <h4 className="font-semibold text-success-foreground mb-2">Farming Tip</h4>
          <p className="text-sm text-success-foreground/90">{weatherData.farmingTip}</p>
        </div>
      </div>
    </Card>
  );
};