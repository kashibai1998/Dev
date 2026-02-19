import React, { useState } from "react";

export const HOCComp = (WrappedComp) => {
  return function NewComp(props) {
    const [count, setCount] = useState(0);

    return (
      <WrappedComp
        count={count}
        inc={() => setCount((prev) => prev + 1)}
        {...props}
      />
    );
  };
};

const HOCCounter = ({ count, inc }) => {
  return (
    <>
      <p>{count}</p>
      <button onClick={inc}>inc</button>
    </>
  );
};

export default HOCComp(HOCCounter);
