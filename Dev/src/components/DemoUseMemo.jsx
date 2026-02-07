import { useMemo, useState } from "react";

function calculateSquare(num) {
  console.log("exp")
  let sum = 0;
  for (let i = 0; i < num; i++) {
    sum = sum + i;
  }
  return sum;
}

export default function DemoUseMemo() {
  const [num, setNum] = useState(1);
  const [show, setShow] = useState(false);

  const square = 
  useMemo(() => 
    {
    console.log("calc");
    return calculateSquare(num);
  }
  ,[num])
  console.log("Rendering");
  
  return (
    <div>
      <h2>Use Memo</h2>
      <input type="text" value={num} onChange={(e) => setNum(e.target.value)} />
      <br />
      <br />
      nth : {square}
      <br />
      {JSON.stringify(show)}
      <button onClick={() => setShow((prev) => !prev)}>toggle</button>
    </div>
  );
}
