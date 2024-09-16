import { useState, useEffect } from 'react'
import './App.css'



function App() {
  const [time, setTime] = useState('00:00:00');
  const [on, setOn] = useState(false);

  useEffect(() => {
    setInterval(() => {
      const t = new Date();
      let h = t.getHours();
      let m = t.getMinutes();
      let s = t.getSeconds();
      setTime(`${h}:${m}:${s}`);
    }, 1000)
  }, []);


  return (
    <>
      <h1>Hello World</h1>
      <button onClick={() => setOn(!on)}>on/off</button>
      <div className={on ? 'dot-on' : 'dot-off'}></div>
      <h2>{time}</h2>
    </>
  )
}

export default App
