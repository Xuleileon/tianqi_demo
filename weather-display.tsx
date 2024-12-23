"use client"

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useWeatherData } from './useWeatherData'
import WeatherChart from './WeatherChart'
import WeatherCard from './WeatherCard'
import { Sun, Cloud, CloudRain } from 'lucide-react'

export default function WeatherDisplay() {
  const [selectedCity, setSelectedCity] = useState('北京')
  const { weatherData } = useWeatherData(selectedCity)

  const getWeatherIcon = (temp: number) => {
    if (temp > 25) return <Sun className="w-8 h-8 text-yellow-500" />
    if (temp > 15) return <Cloud className="w-8 h-8 text-gray-500" />
    return <CloudRain className="w-8 h-8 text-blue-500" />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 p-8">
      <Card className="w-full max-w-4xl mx-auto bg-white/80 backdrop-blur-md shadow-xl rounded-xl overflow-hidden">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">天气预报</h1>
            <Select onValueChange={setSelectedCity} defaultValue={selectedCity}>
              <SelectTrigger className="w-[180px] bg-white">
                <SelectValue placeholder="选择城市" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="北京">北京</SelectItem>
                <SelectItem value="上海">上海</SelectItem>
                <SelectItem value="广州">广州</SelectItem>
                <SelectItem value="深圳">深圳</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {weatherData.length > 0 && (
            <div className="mb-8">
              <WeatherCard 
                date={weatherData[0].date}
                temperature={weatherData[0].temperature}
                humidity={weatherData[0].humidity}
                icon={getWeatherIcon(weatherData[0].temperature)}
              />
            </div>
          )}

          <WeatherChart data={weatherData} />
        </CardContent>
      </Card>
    </div>
  )
}

