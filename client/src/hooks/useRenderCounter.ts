import { FC, useRef } from "react";

const useRenderCounter = (component?: FC) => {
  const render = useRef(0);

  console.log(
    `${component?.name} component has been rendered ${render.current++} times`
  );
};

export default useRenderCounter;
