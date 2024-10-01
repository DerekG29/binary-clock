import { useState, useEffect } from 'react'
import './App.css'
import DotStack from './Components/DotStack';

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
      <div className='binary-container'>
        <div className='dot-container hours'>
          <DotStack digit={time[0]} />
          <DotStack digit={time[1]} />
        </div>
        <div className='dot-container minutes'>
          <DotStack digit={time[3]} />
          <DotStack digit={time[4]} />
        </div>
        <div className='dot-container seconds'>
          <DotStack digit={time[6]} />
          <DotStack digit={time[7]} />
        </div>
      </div>
    </>
  )
}

export default App
