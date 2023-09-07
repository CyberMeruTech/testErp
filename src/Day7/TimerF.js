import React, { useEffect, useRef, useState } from 'react'

export default function TimerF() {
    let [time, setTime] = useState(0);
  let [timerRunning, setTimerRunning] = useState(false);
  let intervalRef = useRef(null);
  let [showTimer, setShowTimer] = useState(false);

  function startTimer () {
    if (!timerRunning) {
        setTime(0);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      setTimerRunning(true);
    }
  };

  function stopTimer () {
    clearInterval(intervalRef.current);
    setTimerRunning(false);
    setTime(0);
  };

  function pauseTimer  ()  {
    clearInterval(intervalRef.current);
    setTimerRunning(false);
  };

  function resumeTimer ()  {
    if (!timerRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      setTimerRunning(true);
    }
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const handleCheckboxChange = (event) => {
    setShowTimer(event.target.checked);
    setTime(0);
    clearInterval(intervalRef.current);
    setTimerRunning(false)

  };
  return (
    <div>
        <label>
        <input type="checkbox"  onChange={handleCheckboxChange} />
        Show Timer
      </label>
      {showTimer && (
        <div>
             {!timerRunning ? (
        <button onClick={startTimer}>Start Timer</button>
      ) :(
        <button onClick={stopTimer}>Stop Timer</button>
      )}
          {timerRunning ? (
            <>
              <p>Time: {time}</p>
              <button onClick={pauseTimer}>Pause</button>
            </>
          ) : (
            <>
              <p>Time: {time}</p>
              <button onClick={resumeTimer}>Resume</button>
            </>
          )}
          
         
        </div>
        
      )}
      
    </div>
  )
}
