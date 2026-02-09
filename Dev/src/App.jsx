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
import RtkTodo from "./rtk/RtkTodo";
import RQuery from "./rtk/RQuery";
import CCounter from "./components/Counter";
import ErrorHandling from "./components/Error/ErrorHandling";
import ErrorBoundaryClass from "./components/Error/ErrClass";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/Error/ErrorFallback";
import ClickCounter from "./components/hoc/ClickCounter";
import TimerImpl from "./comp/TimerImpl";
import AutoLogout from "./comp/AutoLogout";
import Traffic from "./comp/Traffic";
import Debounce from "./comp/Debounce";
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
        {/* <Todo /> */}
        {/* <RtkTodo/> */}
        {/* <RQuery /> */}
        {/* <CCounter/> */}
        {/* <ErrorBoundaryClass>
          <ErrorHandling />
        </ErrorBoundaryClass> */}

        {/* <ErrorBoundary FallbackComponent={ErrorFallback}>
          <ErrorHandling />
        </ErrorBoundary> */}
        {/* <ClickCounter/> */}
        {/* <TimerImpl /> */}
        {/* <AutoLogout /> */}
        {/* <Traffic /> */}
        <Debounce />
      </div>
    </>
  );
}

export default App;
