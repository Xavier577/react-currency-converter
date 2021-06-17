import React, { FC, Fragment } from "react";
import { Theme } from "../../types/types";

const seperatorIcon: FC<{ theme: Theme }> = ({ theme = "dark" }) => {
  return (
    <Fragment>
      {theme === "light" ? (
        <svg
          width="5"
          height="101"
          viewBox="0 0 5 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="2.5"
            y1="100.404"
            x2="2.5"
            y2="-7.62939e-06"
            stroke="black"
            stroke-width="5"
          />
        </svg>
      ) : (
        <svg
          width="5"
          height="101"
          viewBox="0 0 5 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="2.5"
            y1="100.404"
            x2="2.5"
            y2="-7.62939e-06"
            stroke="white"
            stroke-width="5"
          />
        </svg>
      )}
    </Fragment>
  );
};

export default seperatorIcon;
