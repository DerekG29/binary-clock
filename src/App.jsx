import { useState, useEffect } from 'react'
import './App.css'
import DotStack from './DotStack';

function App() {
  const [time, setTime] = useState('00:00:00');

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      const t = date.toTimeString().slice(0, 8);
      setTime(t);
    }, 1000)
  }, []);

  return (
    <>
      <h1>Binary Clock</h1>
      <div className='binary-container'>
        <div className='dot-container hours'>
          <DotStack hours={true} digit={time[0]} />
          <DotStack hours={false} digit={time[1]}/>
        </div>
        <div className='dot-container minutes'>
          <DotStack hours={false} digit={time[3]}/>
          <DotStack hours={false} digit={time[4]}/>
        </div>
        <div className='dot-container seconds'>
          <DotStack hours={false} digit={time[6]}/>
          <DotStack hours={false} digit={time[7]}/>
        </div>
      </div>
      <h2>{time}</h2>
    </>
  )
}

export default App
