import React, { useEffect, useRef } from "react";

const useDidUpdate = (effect, deps) => {
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    return effect();
  }, [deps]);
};

export default useDidUpdate;
