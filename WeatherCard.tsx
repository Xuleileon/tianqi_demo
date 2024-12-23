import { Card, CardContent } from "@/components/ui/card"
import { ReactNode } from 'react'

interface WeatherCardProps {
  date: string
  temperature: number
  humidity: number
  icon: ReactNode
}

export default function WeatherCard({ date, temperature, humidity, icon }: WeatherCardProps) {
  return (
    <Card className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg">
      <CardContent className="p-6">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-lg font-semibold">{new Date(date).toLocaleDateString('zh-CN', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
            <h2 className="text-4xl font-bold mt-2">{temperature}°C</h2>
            <p className="text-lg mt-2">湿度: {humidity}%</p>
          </div>
          <div className="text-6xl">{icon}</div>
        </div>
      </CardContent>
    </Card>
  )
}

