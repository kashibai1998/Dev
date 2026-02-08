import { useEffect, useState } from "react";

export default function CCounterChild({send}) {
    
  return <div>Counter-Child
    <button onClick={()=>send("Hello from child")}>Send</button>
  </div>;
}
