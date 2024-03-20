import React, { useContext } from 'react'
import CountryContext from './CountryContext'

function CountryList() {
    const countries = useContext(CountryContext)

    return (
        <ul>
            {countries.map((country, index) => (
                <li key={index}>{country.name.common}</li> // 'name.common'은 나라의 일반적인 이름을 나타냅니다.
            ))}
        </ul>
    )
}

export default CountryList
