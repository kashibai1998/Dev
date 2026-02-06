import { useEffect, useState } from "react";

const useStopWatch = (size, step, direction, initialTime) => {
  const [time, setTime] = useState(size);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (!running) return;

    if (direction == "down" && time === 0) {
      setRunning(false);
      return;
    }

    if (running && time > 0) {
      timer = setInterval(() => {
        if (direction == "up") {
          setTime((prev) => prev + step);
        } else {
          setTime((prev) => prev - step);
        }
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [running, time]);

  const start = () => setRunning(true);
  const stop = () => setRunning(false);
  const reset = () => {
    setRunning(true);
    setTime(initialTime);
  };
  const format = (seconds) => {
    let min = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    let sec = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");

    return `${min} : ${sec}`;
  };

  return {
    time: format(time),
    start,
    stop,
    reset,
  };
};

export default useStopWatch;
