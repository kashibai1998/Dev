import React, { forwardRef, useImperativeHandle, useRef } from "react";

export const ChildRef = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    sayHello: function sayHello() {
      alert("hii");
    },
  }));
  return null;
});

const ParentRef = () => {
  const ref = useRef();
  return (
    <div>
      <div> use imperativeHandle</div>
      <ChildRef ref={ref} />
      <button onClick={() => ref.current.sayHello()}>say hello</button>
    </div>
  );
};

export default ParentRef;
