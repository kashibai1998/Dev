import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>Counter</div>
      <div>
        <p data-testid="counter">{count}</p>
        <button onClick={() => setCount((c) => c + 1)} data-testid="inc">
          inc
        </button>
        <button onClick={() => setCount((c) => c - 1)} data-testid="dec">
          dec
        </button>
      </div>
    </>
  );
};

export default Counter;
