import { useCallback, useState } from "react";
import ChildUseCallback from "./ChildUseCallback";
import Button from "./Button";

export default function DemoUseCallback() {
  const [count, setCount] = useState(0);
  const inc = () => {
    setCount((c) => c + 1);
  };
  // useCallback(() => {
  //   setCount((c) => c + 1);
  // }, []);

  const dec = useCallback(() => {
    setCount((c) => c - 1);
  }, []);

  return (
    <div>
      <h2>use callback</h2>
      <p>{count}</p>
      <input
        type="text"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <Button label="INC" handler={inc} />
      <Button label="DEC" handler={dec} />

      <ChildUseCallback count={count} inc={inc} dec={dec} />
    </div>
  );
}
