import Button from "./Button";

export default function ChildUseCallback({ count, inc, dec }) {
  console.log("child callback comp", count);
  return (
    <div>
      <p>{count}</p>
      {/* <button onClick={inc}>Inc</button> */}
      {/* <button onClick={dec}>Dec</button> */}
      <Button label="INC" handler={inc} />
      <Button label="DEC" handler={dec} />
    </div>
  );
}
