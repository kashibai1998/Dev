import { useEffect, useState } from "react";

export default function Child1({ value, setText }) {
  return (
    <div>
      Child-1
      <input type="text" value={value} onChange={(e)=>setText(e.target.value)}/>
    </div>
  );
}
