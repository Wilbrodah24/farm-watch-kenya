import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const priceData = {
  maize: [
    { date: 'Jan', price: 3800, prediction: 4200 },
    { date: 'Feb', price: 4100, prediction: 4350 },
    { date: 'Mar', price: 4300, prediction: 4500 },
    { date: 'Apr', price: 4500, prediction: 4800 },
    { date: 'May', price: 4200, prediction: 4600 },
    { date: 'Jun', price: 4600, prediction: 4900 },
  ],
  coffee: [
    { date: 'Jan', price: 7800, prediction: 8500 },
    { date: 'Feb', price: 8200, prediction: 8800 },
    { date: 'Mar', price: 8500, prediction: 9000 },
    { date: 'Apr', price: 8200, prediction: 8600 },
    { date: 'May', price: 7900, prediction: 8400 },
    { date: 'Jun', price: 8200, prediction: 8700 },
  ],
  tea: [
    { date: 'Jan', price: 6200, prediction: 6800 },
    { date: 'Feb', price: 6500, prediction: 7000 },
    { date: 'Mar', price: 6800, prediction: 7200 },
    { date: 'Apr', price: 6600, prediction: 7100 },
    { date: 'May', price: 6900, prediction: 7300 },
    { date: 'Jun', price: 6800, prediction: 7200 },
  ]
};

export const PriceChart = () => {
  const [selectedCrop, setSelectedCrop] = useState<keyof typeof priceData>('maize');

  return (
    <Card className="p-6 shadow-card">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-4 sm:space-y-0">
        <h3 className="text-2xl font-bold text-foreground">Price Trends & Predictions</h3>
        <Select value={selectedCrop} onValueChange={(value) => setSelectedCrop(value as keyof typeof priceData)}>
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="maize">Maize</SelectItem>
            <SelectItem value="coffee">Coffee</SelectItem>
            <SelectItem value="tea">Tea</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={priceData[selectedCrop]}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="date" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickFormatter={(value) => `KES ${value}`}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: 'var(--radius)',
                color: 'hsl(var(--foreground))'
              }}
              formatter={(value, name) => [
                `KES ${value}`, 
                name === 'price' ? 'Current Price' : 'Predicted Price'
              ]}
            />
            <Line 
              type="monotone" 
              dataKey="price" 
              stroke="hsl(var(--primary))" 
              strokeWidth={3}
              dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: 'hsl(var(--primary))', strokeWidth: 2 }}
            />
            <Line 
              type="monotone" 
              dataKey="prediction" 
              stroke="hsl(var(--accent))" 
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ fill: 'hsl(var(--accent))', strokeWidth: 2, r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex items-center justify-center space-x-6 text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-primary rounded-full"></div>
          <span className="text-muted-foreground">Current Prices</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-accent rounded-full"></div>
          <span className="text-muted-foreground">Price Predictions</span>
        </div>
      </div>
    </Card>
  );
};