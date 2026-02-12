import React, { useEffect, useRef, useState } from "react";

const useTimer = (step = 1, initialTime = 10) => {
  const [time, setTime] = useState(initialTime);
  const timer = useRef(null);
  const start = () => {
    if (time == 0) {
      clearInterval(timer.current)
      setTime(initialTime)
    };
    timer.current = setInterval(() => {
      setTime((prev) => {
        if (prev <= 0) {
          clearInterval(timer.current);
          timer.current = null;
          return 0;
        }
        //if (time == 0) setTime(initialTime);
        return prev - step;
      });
    }, 1000);
  };

  const stop = () => {
    clearInterval(timer.current);
  };

  const reset = () => {
    clearInterval(timer.current);
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

    return m + " : " + s;
  };

  return {
    time: format(time),
    start,
    stop,
    reset,
  };
};

// const useTimer = (step = 0, initialTime = 5) => {
//   const [time, setTime] = useState(initialTime);
//   const [running, setRunning] = useState(false);

//   useEffect(() => {
//     let timer;
//     if (!running) return;
//     if (running && time > 0) {
//       timer = setInterval(() => {
//         setTime((prev) => {
//           if (prev <= 1) {
//             setRunning(false);
//             return 0;
//           }
//           return prev - 1;
//         });
//       }, 1000);
//     }
//     return () => clearInterval(timer);
//   }, [running, time]);

//   const format = (seconds) => {
//     let m = Math.floor(seconds / 60)
//       .toString()
//       .padStart(2, "0");
//     let s = Math.floor(seconds % 60)
//       .toString()
//       .padStart(2, "0");

//     return m + " : " + s;
//   };

//   return {
//     time: format(time),
//     start: () => {
//       if (time == 0) setTime(initialTime);
//       setRunning(true);
//     },
//     stop: () => setRunning(false),
//     reset: () => {
//       setRunning(true);
//       setTime(initialTime);
//     },
//   };
// };

export default useTimer;

export const TimerWithRef = () => {
  const { time, start, stop, reset } = useTimer(1, 5);
  return (
    <div>
      {time}
      <br />
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};
