import React from "react";
import useCounterStore from "./zuStore";

const zuCounter = () => {
  const count = useCounterStore((store) => store.count);
  return <div>{count}</div>;
};

export default zuCounter;
