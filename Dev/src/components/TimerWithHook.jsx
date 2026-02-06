import React from "react";
import useStopWatch from "../hooks/useStopWatch";

const INITIAL_VALUE = 55;
const TimerWithHook = () => {
  const { time, start, stop, reset } = useStopWatch(
    INITIAL_VALUE,
    10,
    "down",
    INITIAL_VALUE
  );
  return (
    <div>
      <h2>Stopwatch hook</h2>
      {time}
      <div>
        <button onClick={start}>start</button>
        <button onClick={stop}>stop</button>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
};

export default TimerWithHook;
