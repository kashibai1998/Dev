import { forwardRef, useImperativeHandle, useRef } from "react";

const ChildRef = forwardRef((props, ref) => {
  const inpRef = useRef(null);
  useImperativeHandle(ref, () => ({
    focus: () => inpRef.current.focus(),
    clear:()=>inpRef.current.value = null
  }));

  return <input type="text" ref={inpRef} placeholder="use imperativeHandle" />;
});

export default ChildRef;
