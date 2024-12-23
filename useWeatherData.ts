import { useState, useEffect } from 'react'

interface WeatherData {
  date: string
  temperature: number
  humidity: number
}

export function useWeatherData(city: string) {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([])

  useEffect(() => {
    // 模拟API调用
    const fetchData = () => {
      const data: WeatherData[] = Array.from({ length: 15 }, (_, i) => ({
        date: new Date(Date.now() + i * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        temperature: Math.round(Math.random() * 20 + 10), // 10-30度
        humidity: Math.round(Math.random() * 50 + 30), // 30-80%
      }))
      setWeatherData(data)
    }

    fetchData()
  }, [city])

  return { weatherData }
}

