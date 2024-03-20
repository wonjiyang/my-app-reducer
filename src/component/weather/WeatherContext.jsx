import React, { createContext, useState, useEffect } from 'react'

const WeatherContext = createContext()

export function WeatherProvider({ children }) {
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        fetch(
            'https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=ecbc21850a6ba9c190e684bcdef61f08&units=metric'
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data) // 여기에서 API 응답 확인
                setWeather(data)
            })
            .catch((error) => {
                console.error('날씨 정보를 불러오는데 실패했습니다:', error)
            })
    }, [])

    return <WeatherContext.Provider value={weather}>{children}</WeatherContext.Provider>
}

export default WeatherContext
