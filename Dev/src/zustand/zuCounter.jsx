import React from "react";
import useCounterStore from "./zuStore";

const ZuCounter = () => {
  const { count, inc, dec, reset } = useCounterStore((store) => store);

  return (
    <div>
      <p>Zustand Store</p>
      <p>{count}</p>
      <button onClick={inc}>inc</button>
      <button onClick={dec}>dec</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default ZuCounter;
