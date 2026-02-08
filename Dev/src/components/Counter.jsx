import { useEffect, useReducer, useState } from "react";
import CCounterChild from "./CounterChild";
import Child1 from "./Child1";
import Child2 from "./Child2";

function reducerFn(state, action) {
  console.log(state, action);
  if (action.type == "inc") {
    return { counter: state.counter + 1 };
  }
  return state;
}

export default function CCounter() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const [state, dispatch] = useReducer(reducerFn, { counter: 0 });

  useEffect(() => {
    console.log("Use effect running");
  }, [count]);

  const handleSend = (data) => {
    console.log("Data from child", data);
  };
  console.log("k");
  return (
    <>
      <div>
        Counter
        <p>{count}</p>
        <button onClick={() => setCount((c) => c + 1)}>inc</button>
        <CCounterChild send={handleSend} />
        <br />
        <div>
          <Child1 value={text} setText={setText} />
          <Child2 value={text} setText={setText} />
          {/* <Child2 /> */}
        </div>
      </div>

      <div>k-{state.counter}</div>
      <button onClick={() => dispatch({ type: "inc" })}>inc</button>
    </>
  );
}
