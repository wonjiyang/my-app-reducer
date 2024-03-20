import React from 'react'
import CountryApp from './component/country/CountryApp'
import TimeApp from './component/time/TimeApp'
import WeatherApp from './component/weather/WeatherApp'

function App() {
    return (
        <div>
            <WeatherApp />
            <TimeApp />
        </div>
    )
}

export default App