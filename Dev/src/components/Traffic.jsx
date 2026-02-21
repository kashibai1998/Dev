import React, { useEffect, useState } from "react";

const Traffic = () => {
  const [color, setColor] = useState("red");
  //   const [color, setColor] = useState("red");
  //   useEffect(() => {
  //     let timer;

  //     timer = setInterval(() => {
  //       setColor((prev) =>
  //         prev == "red" ? "yellow" : prev == "yellow" ? "green" : "red"
  //       );
  //     }, 1000);

  //     return () => clearInterval(timer);
  //   }, [color]);

  useEffect(() => {
    let colors = ["red", "yellow", "green"];
    let i = 0;
    let timer;
    timer = setInterval(() => {
      setColor(colors[i % 3]);
      i++;
    }, 10000);

    return () => clearInterval(timer);
  }, []);
  return <div>{color}</div>;
};

export default Traffic;
