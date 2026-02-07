import { useDispatch, useSelector } from "react-redux";
import { inc } from "../store/counterSlice";

export default function Counter() {
  const count = useSelector((store) => (store.counter.count));
  const dispatch = useDispatch();

  const handleInc = () => {
    dispatch(inc(2));
  };
  return (
    <div>
      <h2>Redux</h2>
      <p>{count}</p>
      <button onClick={handleInc}>Inc</button>
    </div>
  );
}
