import React, { createContext, useState, useEffect } from 'react'

// Context 생성
// 문법 : const MyContext = React.createContext(defaultValue);
// createContext 함수를 사용하여 새로운 Context를 생성합니다.
// createContext 함수는 Context 객체를 반환합니다.
// 이 객체는 Provider 및 Consumer 컴포넌트를 포함합니다.
// Provider 및 Consumer 컴포넌트는 Context 객체의 속성입니다.
const CountryContext = createContext()

// Provider 생성
export const CountryProvider = ({ children }) => {
    // useState 함수를 사용하여 countries 상태를 생성합니다.
    const [countries, setCountries] = useState([])

    // useEffect 함수를 사용하여 데이터를 가져옵니다.
    // 의존성 배열을 빈 배열로 설정하면 컴포넌트가 마운트될 때 한 번만 실행됩니다.
    useEffect(() => {
        // fetch 함수를 사용하여 데이터를 가져옵니다.
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => response.json())
            .then((data) => setCountries(data))
    }, [])

    // Provider 컴포넌트를 사용하여 Context의 값을 제공합니다.
    return <CountryContext.Provider value={countries}>{children}</CountryContext.Provider>
}

export default CountryContext
