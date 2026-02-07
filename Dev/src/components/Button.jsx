import React from "react";

const Button = (props) => {
  console.log("child button", props);
  return (
    <div>
      <button onClick={props.handler}>{props.label}</button>
    </div>
  );
};

// const Button = React.memo((props) => {
//   console.log("child button", props);
//   return (
//     <div>
//       <button onClick={props.handler}>{props.label}</button>
//     </div>
//   );
// });

export default Button;
