import React from 'react'
import WeatherContext, { WeatherProvider } from './WeatherContext'

function WeatherApp() {
    return (
        <WeatherProvider>
            <div>
                <h1>날씨 앱</h1>
                <Weather />
            </div>
        </WeatherProvider>
    )
}

function Weather() {
    return (
        <WeatherContext.Consumer>
            {(weather) => (
                <div>
                    {weather ? (
                        <div>
                            <p>도시: {weather.name}</p>
                            {/* 옵셔널 체이닝을 사용해 안전하게 접근 */}
                            <p>날씨: {weather.weather?.[0]?.main}</p>
                            <p>온도: {weather.main?.temp}°C</p>
                        </div>
                    ) : (
                        <p>날씨 정보를 가져오는 중...</p>
                    )}
                </div>
            )}
        </WeatherContext.Consumer>
    )
}

export default WeatherApp
