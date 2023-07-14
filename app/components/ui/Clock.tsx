import React, { useEffect, useState } from 'react'

const Clock = () => {

  const [ days, setDays ] = useState(Number);
  const [hours, setHours] = useState(Number)
  const [minutes, setMinutes] = useState(Number)
  const [seconds, setSeconds] = useState(Number)

  let interval: NodeJS.Timer;

  const countDown = () => {
    
    const destination = new Date('jul 17 2023').getTime()
    interval = setInterval(() => {
      const now = new Date().getTime()
      const different = destination - now

      const days = Math.floor(different / (1000 * 60 * 60 * 24))
      const hours = Math.floor(different % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
      const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((different % (1000 * 60)) / 1000)
      if(destination < 0) clearInterval(interval)
      
      else {
        setDays(days)
        setHours(hours)
        setMinutes(minutes)
        setSeconds(seconds)

      }
    })
  };

  useEffect(() => {
    countDown()
  })

  return (
    <div className="clock_wrapper flex items-center gap-3">
      <div className="clock_data flex items-center gap-3">
        <div className="text-center">
          <h1 className="text-white font-semibold">{days}</h1>
          <h5 className="text-white font-semibold">Dias</h5>
        </div>
        <span className="text-4xl text-white font-semibold">:</span>
        <div className="text-center">
          <h1 className="text-white font-semibold">{hours}</h1>
          <h5 className="text-white font-semibold">Horas</h5>
        </div>
        <span className="text-4xl text-white font-semibold">:</span>
        <div className="text-center">
          <h1 className="text-white font-semibold">{minutes}</h1>
          <h5 className="text-white font-semibold">Minutos</h5>
        </div>
        <span className="text-4xl text-white font-semibold">:</span>
        <div className="text-center">
          <h1 className="text-white font-semibold">{seconds}</h1>
          <h5 className="text-white font-semibold">segundos</h5>
        </div>
      </div>
    </div>
  )
}

export default Clock