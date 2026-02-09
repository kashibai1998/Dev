import React, { useEffect, useRef, useState } from "react";

const Traffic = () => {
  const [color, setColor] = useState("red");
  //   useEffect(() => {
  //     let colors = ["red", "yellow", "green"];
  //     let timer;
  //     let i = 0;
  //     timer = setInterval(() => {
  //       setColor(colors[i % 3]);
  //       i++;
  //     }, 1000);
  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   }, []);
  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      setColor((prev) =>
        prev == "red" ? "yellow" : prev == "yellow" ? "green" : "red"
      );
    }, 2000);
    return () => clearTimeout(timer);
  }, [color]);
  return (
    <div>
      <h2>Traffic</h2>
      <div style={{ color: `${color}` }}>{color}</div>
    </div>
  );
};

export default Traffic;
