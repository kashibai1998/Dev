import React, { forwardRef, useImperativeHandle, useRef } from "react";

const ChildRef = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
  }));

  return <input ref={inputRef} type="text" />;
});

const Ref = () => {
  const ref = useRef(null);
  return (
    <div>
      {/* <input type="text" ref={ref} /> */}
      <ChildRef ref={ref} />
      <button onClick={() => ref.current.focus()}>focus</button>
    </div>
  );
};

export default Ref;
