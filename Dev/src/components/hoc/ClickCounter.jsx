import WithCounter from "./withCounter";

function ClickCounter({ count, inc }) {
  return (
    <div>
      <h2>HOC Counter</h2>
      <p>{count}</p>
      <button onClick={inc}>inc</button>
    </div>
  );
}

export default WithCounter(ClickCounter);
