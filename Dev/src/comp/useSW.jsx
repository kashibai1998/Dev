import { useEffect, useState } from "react";

export default function useSW(size, step, direction) {
  const [time, setTime] = useState(size);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    let timer;

    if (!running) return;

    if (direction == "down" && time == 0) return;

    if (running && time > 0) {
      timer = setInterval(() => {
        setTime((prev) => (direction == "up" ? prev + step : prev - step));
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [time, running]);

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
    start: () => setRunning(true),
    stop: () => setRunning(false),
    reset: () => {
      setTime(size);
      setRunning(true);
    },
  };
}
