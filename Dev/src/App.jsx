import React from "react";
import "./index.css";
import Child from "./components/Child";
import CounterUseReducer from "./components/CounterUseReducer";
import ErrorCls, { ErrorBoundaryFun } from "./components/Error";
import HOCCounter from "./components/HOC";
import MemoParent from "./components/Memo";
import Pagination from "./components/Pagination";
import Ref from "./components/Ref";
import { ThemeCtxComp } from "./components/ThemeCtx";
import Timer from "./components/Timer";
import Todo from "./components/Todo";
import TodoRQuery from "./components/TodoRQuery";
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
      <div>
        <h2>Pagination</h2>
        <Pagination />
      </div>

      <div>
        <h2>Ref</h2>
        <Ref />
      </div>

      <div>
        <h2>ThemeCtxComp</h2>
        <ThemeCtxComp />
      </div>
      <div>
        <h2>Timer</h2>
        <Timer />
      </div>
      <div>
        <h2>Todo</h2>
        <Todo />
      </div>
      <div>
        <h2>TodoRQuery</h2>

        <TodoRQuery />
      </div>
    </>
  );
}

export default App;
