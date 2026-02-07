import { useState } from "react";
import "./index.css";
import Timer from "./components/Timer";
import TimerWithHook from "./components/TimerWithHook";
import DemoUseMemo from "./components/DemoUseMemo";
import DemoUseCallback from "./components/DemoUseCallback";
import InputRef from "./components/InputRef";
import Virtualization from "./components/Virtualization";
import Counter from "./components/CounterReduxCtx";
import Todo from "./components/Todo";
function App() {
  return (
    <>
      <h2>React Dev</h2>
      <div>
        {/* <Timer /> */}
        {/* <TimerWithHook />  */}
        {/* <DemoUseMemo /> */}

        {/* <DemoUseCallback /> */}
        {/* <InputRef/> */}
        {/* <Virtualization /> */}
        {/* <Counter/> */}
        <Todo />
      </div>
    </>
  );
}

export default App;
