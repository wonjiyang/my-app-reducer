import React from 'react'
import { CountryProvider } from './CountryContext'
import CountryList from './CountryList'

function CountryApp() {
    return (
        <CountryProvider>
            <div className="App">
                <h1>나라 목록</h1>
                <CountryList />
            </div>
        </CountryProvider>
    )
}

export default CountryApp
