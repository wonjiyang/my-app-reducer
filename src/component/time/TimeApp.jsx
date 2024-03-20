import React, { useState } from 'react'
import TimeContext from './TimeContext'

function TimeApp() {
    const [time, setTime] = useState(new Date())

    const updateTime = () => {
        setTime(new Date()) // 현재 시간으로 업데이트
    }

    return (
        // Context.Provider로 전역 상태를 제공
        <TimeContext.Provider value={time}>
            <div>
                <h1>전세계 나라의 현재 시간</h1>
                <button onClick={updateTime}>시간 업데이트</button>
                <Time />
            </div>
        </TimeContext.Provider>
    )
}

function Time() {
    return (
        // Context.Consumer로 전역 상태를 사용
        <TimeContext.Consumer>
            {(time) => (
                <div>
                    <p>한국: {time.toLocaleString('ko-KR')}</p>
                    <p>미국: {time.toLocaleString('en-US')}</p>
                    <p>중국: {time.toLocaleString('zh-CN')}</p>
                </div>
            )}
        </TimeContext.Consumer>
    )
}

export default TimeApp
