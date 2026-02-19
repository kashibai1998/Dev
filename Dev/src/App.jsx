import React from "react";
import "./index.css";
import Child from "./components/Child";
import CounterUseReducer from "./components/CounterUseReducer";
import ErrorCls, { ErrorBoundaryFun } from "./components/Error";
import HOCCounter from "./components/HOC";
import MemoParent from "./components/Memo";
function App() {
  return (
    <>
      <div>
        <h2>Child Communication</h2>
        <Child />
      </div>
      <div>
        <h2>CounterUseReducer</h2>
        <CounterUseReducer />
      </div>

      <div>
        <h2>Error Handling Class</h2>
        <ErrorCls />
      </div>
      <div>
        <h2>Error Handling Function</h2>
        <ErrorBoundaryFun />
      </div>

      <div>
        <h2>HOC Counter</h2>
        <HOCCounter />
      </div>

      <div>
        <h2>React Memo</h2>
        <MemoParent />
      </div>
    </>
  );
}

export default App;
