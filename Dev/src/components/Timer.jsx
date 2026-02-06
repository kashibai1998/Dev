import { useEffect, useState } from "react";

const TIMER_VALUE = 5;
const Timer = () => {
  const [time, setTime] = useState(TIMER_VALUE);
  const [isRunning, setRunning] = useState(false);
  useEffect(() => {
    let timer;
    if (!isRunning) return;

    if (time === 0) {
      setRunning(false);
      return;
    }
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning, time]);

  const format = (seconds) => {
    let min = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    let sec = (seconds % 60).toString().padStart(2, "0");

    return min + " : " + sec;
  };
  return (
    <>
      <p>
        Create timer hook that can simulate a countdown timer.
        <br />
        The size or step of the timer should be customizable.
        <br />
        It will provide us time to display along with play and pause
        functionality
        <br />
        Write unit test for the same.
        <br />
        After completion, how can we use same hook for timer instead of
        stopwatch
      </p>

      <div>
        <h2>Timer / Stopwatch</h2>
        <div>{format(time)}</div>
        <div>
          <button onClick={() => setRunning(true)}>Start/Play</button>
          <button onClick={() => setRunning(false)}>Stop/Pause</button>
          <button
            onClick={() => {
              setTime(TIMER_VALUE);
              setRunning(true);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Timer;
