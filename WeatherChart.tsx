import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Card, CardContent } from "@/components/ui/card"

interface WeatherData {
  date: string
  temperature: number
  humidity: number
}

interface WeatherChartProps {
  data: WeatherData[]
}

export default function WeatherChart({ data }: WeatherChartProps) {
  return (
    <Card className="bg-white shadow-lg">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">15天天气趋势</h3>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis 
                dataKey="date" 
                stroke="#718096"
                tick={{ fill: '#718096' }}
                tickFormatter={(value) => new Date(value).toLocaleDateString('zh-CN', { month: 'short', day: 'numeric' })}
              />
              <YAxis 
                yAxisId="left" 
                stroke="#718096"
                tick={{ fill: '#718096' }}
              />
              <YAxis 
                yAxisId="right" 
                orientation="right" 
                stroke="#718096"
                tick={{ fill: '#718096' }}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '0.5rem', border: 'none', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
                labelStyle={{ color: '#4a5568', fontWeight: 'bold' }}
              />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="temperature" stroke="#3182ce" name="温度 (°C)" dot={false} strokeWidth={2} />
              <Line yAxisId="right" type="monotone" dataKey="humidity" stroke="#805ad5" name="湿度 (%)" dot={false} strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

