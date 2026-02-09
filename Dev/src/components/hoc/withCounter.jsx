import { useState } from "react";

export default function WithCounter(WrappedComp) {
  return function EnhancedComp(props) {
    const [count, setCount] = useState(0);

    return (
      <WrappedComp
        count={count}
        inc={() => setCount((c) => c + 1)}
        {...props}
      />
    );
  };
}
