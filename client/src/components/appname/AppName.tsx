import React, { FC, Fragment } from "react";
import "./AppName.css";

const AppName: FC<{ className?: string }> = ({ className }) => {
  return (
    <Fragment>
      <h1 className={` app-name ${className}`}>
        Jver<span id="tee">t</span>
      </h1>
    </Fragment>
  );
};

export default AppName;
