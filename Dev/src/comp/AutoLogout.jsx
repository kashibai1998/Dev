import React, { useEffect } from "react";

const AutoLogout = () => {
  useEffect(() => {
    let timer;

    function resetTtimer() {
      clearTimeout(timer);
      timer = setTimeout(() => {
        console.log("logout");
      }, 5000);
    }

    window.addEventListener("mousemove", resetTtimer);
    window.addEventListener("keydown", resetTtimer);

    return () => {
      window.removeEventListener("mousemove", resetTtimer);
      window.removeEventListener("keydown", resetTtimer);
    };
  }, []);

  return <div>AutoLogout</div>;
};

export default AutoLogout;
