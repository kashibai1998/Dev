import { useState } from "react";
import "./index.css";
import Timer from "./components/Timer";
import TimerWithHook from "./components/TimerWithHook";
function App() {
  return (
    <>
      <h2>React Dev</h2>
      <div>
        <Timer />
        <TimerWithHook />
      </div>
    </>
  );
}

export default App;
