import React from "react";
import useCounterStore from "./zuStore";

const ZuCounter = () => {
  const { count, inc, dec } = useCounterStore((store) => store);

  function handleReset() {
    console.log("click");
    useCounterStore.getState().reset(10);
    console.log("count", count);
  }
  return (
    <div>
      <p>Zustand Store</p>
      <p>{count}</p>
      <button onClick={inc}>inc</button>
      <button onClick={dec}>dec</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
};

export default ZuCounter;
