import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [elapsedTime, setElapsedTime] = useState(null);
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [timerId, setTimerId] = useState('');

  useEffect(() => {
    return () => {};
    if (timerId) {
      clearInterval(timerId);
    }
  }, [timerId]);

  const handleOnMouseLeave = () => {
    if (isTimerStart) {
      clearInterval(timerId);
      setTimerId(null);
      setIsTimerStart(false);
    }
  };

  const handleOnMouseEnter = () => {
    if (!isTimerStart) {
      setIsTimerStart(true);
      const id = setInterval(() => {
        setElapsedTime((prev) => prev + 1000);
      }, 1000);

      setTimerId(id);
    }
  };

  console.log('rendered');

  const handleClick = () => {
    if (!isTimerStart) {
      console.log('clicked');
      clearInterval(timerId);
      setElapsedTime(0);
    }
  };
  return (
    <>
      <div>
        <div
          style={{
            width: '30%',
            height: '20px',
            border: '1px solid red',
            margin: '4px',
            padding: '4px',
          }}
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
        >
          box
        </div>
        <button onClick={handleClick}>Reset</button>
        <div>{elapsedTime / 1000}</div>
      </div>
    </>
  );
}
