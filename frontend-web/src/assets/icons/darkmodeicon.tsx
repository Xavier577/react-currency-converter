import  { FC, Fragment } from "react";
import { ThemeToggleButton } from "../../types/types";

const DarkModeIcon: FC<ThemeToggleButton> = ({
  theme,
  className,
  clickEvent
}) => {
  return (
    <Fragment>
      <svg
      onClick={clickEvent}
      className={className}
      width="70"
      height="66"
      viewBox="0 0 70 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      >
      <path
        d="M27.3292 15.1525C26.8042 16.9125 26.5417 18.755 26.5417 20.625C26.5417 31.845 36.225 40.975 48.125 40.975C50.1083 40.975 52.0625 40.7275 53.9292 40.2325C50.8958 47.2725 43.5458 52.25 35 52.25C23.7417 52.25 14.5833 43.615 14.5833 33C14.5833 24.9425 19.8625 18.0125 27.3292 15.1525ZM35 8.25C20.5042 8.25 8.75 19.3325 8.75 33C8.75 46.6675 20.5042 57.75 35 57.75C49.4958 57.75 61.25 46.6675 61.25 33C61.25 31.735 61.1333 30.47 60.9583 29.26C58.1 33.0275 53.4333 35.475 48.125 35.475C39.4333 35.475 32.375 28.82 32.375 20.625C32.375 15.6475 34.9708 11.22 38.9667 8.525C37.6833 8.36 36.3417 8.25 35 8.25Z"
        fill={theme === "light"? "#000000" : "#ffffff"}
      />
      </svg>
      
    </Fragment>
  );
};

export default DarkModeIcon;
