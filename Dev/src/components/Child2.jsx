import { useEffect, useState } from "react";

export default function Child2({ value, setText }) {
  return (
    <div>
      Child-2
      <input
        type="text"
        value={value}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
