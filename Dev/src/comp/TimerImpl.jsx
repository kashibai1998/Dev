import React from 'react'
import useSW from './useSW'

const TimerImpl = () => {

    const {time,start,stop,reset}=useSW(10,1,"down")
  return (
    <div>
        <h2>TimerImpl</h2>
        <p>{time}</p>
        <button onClick={start}>start</button>
        <button onClick={stop}>stop</button>
        <button onClick={reset}>Reset</button>
    </div>

  )
}

export default TimerImpl