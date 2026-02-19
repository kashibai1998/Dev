import React, { useState } from "react";

const Child = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <Child1 value={value} setValue={setValue} />
      <Child2 value={value} setValue={setValue} />
    </div>
  );
};

export default Child;

export const Child1 = ({ value, setValue }) => {
  return (
    <div>
      <p>Child1</p>

      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};

export const Child2 = ({ value, setValue }) => {
  return (
    <div>
      <p>Child2</p>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};
