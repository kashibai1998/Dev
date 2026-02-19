import React, { useReducer } from "react";

function reducerFn(state, action) {
  if (action.type == "inc") {
    return { count: state.count + 1 };
  } else if (action.type == "dec") {
    return { count: state.count - 1 };
  } else {
    return { count: 0 };
  }
  return state;
}

const CounterUseReducer = () => {
  const [counter, dispatch] = useReducer(reducerFn, { count: 0 });
  return (
    <div>
      <div>
        <p>{counter.count}</p>
        <button onClick={() => dispatch({ type: "inc" })}>inc</button>
        <button onClick={() => dispatch({ type: "dec" })}>dec</button>
        <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      </div>
    </div>
  );
};

export default CounterUseReducer;
