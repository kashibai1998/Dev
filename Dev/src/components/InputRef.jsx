import { useRef } from "react";
import ChildRef from "./ChildRef";

export default function InputRef() {
  const ref = useRef(null);

  const handleFocus = () => {
    console.log("click");
    ref.current.focus();
  };
  return (
    <>
      <div>
        Input focus with button
        <input type="text" ref={ref} />
        <button onClick={handleFocus}>Focus</button>
      </div>
      <br />
      <div>
        Input focus with Child Inputref
        <ChildRef ref={ref} />
        <button onClick={() => ref.current.focus()}>Focus</button>
        <button onClick={() => ref.current.clear()}>Clear</button>
      </div>
    </>
  );
}
