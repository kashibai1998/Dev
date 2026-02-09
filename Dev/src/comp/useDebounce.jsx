import React, { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
  const [debounceVal, setText] = useState(value);
  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      setText(value);
    }, delay);
    return ()=>clearTimeout(timer)
  }, [value]);
  return debounceVal;
};

export default useDebounce;
