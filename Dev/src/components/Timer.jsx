import React, { useEffect, useRef, useState } from "react";

const useSwWithRef = (initialTime = 5, step = 1, dir = "down") => {
  const [time, setTime] = useState(initialTime);
  const ref = useRef(null);
  const start = () => {
    if (ref.current) return;
    if (time == 0 && dir == "down") {
      setTime(initialTime);
    }
    ref.current = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1 && dir == "down") {
          clearInterval(ref.current);
          ref.current = null;
          return 0;
        }
        console.log(prev, ref.current, dir);
        return dir == "down" ? prev - step : prev + step;
      });
    }, 1000);
  };

  const stop = () => {
    clearInterval(ref.current);
    ref.current = null;
  };

  const reset = () => {
    clearInterval(ref.current);
    ref.current = null;
    setTime(initialTime);
    start();
  };

  const format = (seconds) => {
    let m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    let s = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");

    return `${m} : ${s}`;
  };

  return {
    time: format(time),
    start,
    stop,
    reset,
  };
};

const useSwWithState = (initialTime = 5, step = 1, dir = "down") => {
  const [time, setTime] = useState(initialTime);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    let timer;
    if (!running) return;
    if (time == 0 && dir == "down") {
      setTime(initialTime);
    }
    timer = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1 && dir == "down") {
          setRunning(false);
          return 0;
        }
        return dir == "down" ? prev - step : prev + step;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [time, running]);
  const start = () => {
    setRunning(true);
  };

  const stop = () => {
    setRunning(false);
  };

  const reset = () => {
    setRunning(true);
    setTime(initialTime);
  };

  const format = (seconds) => {
    let m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    let s = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");

    return `${m} : ${s}`;
  };

  return {
    time: format(time),
    start,
    stop,
    reset,
  };
};

const Timer = () => {
//   const { time, start, stop, reset } = useSwWithRef(5, 1, "down");
  const { time, start, stop, reset } = useSwWithState(5, 1, "down");
  return (
    <div>
      <p>{time}</p>
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default Timer;
