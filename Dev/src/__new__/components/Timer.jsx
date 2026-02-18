import React, { useRef, useState } from "react";

export const useNewTimer = (iTime = 5, step = 1, direction = "down") => {
  const [time, setTime] = useState(iTime);
  const timeRef = useRef(null);
  const format = (time) => {
    let min = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    let sec = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");

    return `${min} : ${sec}`;
  };
  const start = () => {
    if (timeRef.current) return;
    if (time == 0 && direction == "down") {
      setTime(iTime);
    }
    timeRef.current = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1 && direction == "down") {
          clearInterval(timeRef.current);
          timeRef.current = null;
          return 0;
        }
        return direction == "down" && time > 0 ? prev - 1 : prev + 1;
      });
    }, 1000);
  };
  return {
    time: format(time),
    start,
    stop: () => {
      clearInterval(timeRef.current);
      timeRef.current = null;
    },
    reset: () => {
      clearInterval(timeRef.current);
      timeRef.current = null;
      setTime(iTime);
      start();
    },
  };
};

const Timer = () => {
  const { time, start, stop, reset } = useNewTimer(5, 1, "down");
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
