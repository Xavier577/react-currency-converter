import  { FC, Fragment } from "react";
import { Theme } from "../../types/types";

const SeperatorIcon: FC<{ theme?: Theme; className?: string }> = ({
  theme = "dark",
  className,
}) => {
  return (
    <Fragment>
      {theme === "light" ? (
        <svg
          className={className}
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
          className={className}
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

export default SeperatorIcon;
