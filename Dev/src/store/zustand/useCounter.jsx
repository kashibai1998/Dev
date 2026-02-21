import { create } from "zustand";
import React from "react";
const useCounterStore = create((set) => ({
  count: 0,
  inc: (step) => set((state) => ({ count: state.count + step })),
}));



const UseCounter = () => {
  const { count, inc } = useCounterStore((store) => store);
  return (
    <div>
      <p>{count}</p>
      <button onClick={()=>inc(5)}>inc</button>
    </div>
  );
};

export default UseCounter;
