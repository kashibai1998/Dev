import { useState } from "react";
import "./index.css";
import Timer from "./components/Timer";
import TimerWithHook from "./components/TimerWithHook";
import DemoUseMemo from "./components/DemoUseMemo";
import DemoUseCallback from "./components/DemoUseCallback";
import InputRef from "./components/InputRef";
import Virtualization from "./components/Virtualization";
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
        <Virtualization />
      </div>
    </>
  );
}

export default App;
