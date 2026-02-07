import { useDispatch, useSelector } from "react-redux";
import { inc } from "../store/counterSlice";
import { useContext } from "react";
import { ThemeCtx } from "../store/themeCtx";

export default function Counter() {
  const count = useSelector((store) => store.counter.count);
  const dispatch = useDispatch();
  const { theme, toggle } = useContext(ThemeCtx);

  const handleInc = () => {
    dispatch(inc(2));
  };
  return (
    <div>
      <h2>Redux</h2>
      <p>{count}</p>
      <button onClick={handleInc}>Inc</button>
      <h2>Context</h2>
      <p>{theme}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}
