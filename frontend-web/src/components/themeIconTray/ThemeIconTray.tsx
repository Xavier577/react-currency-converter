import  { FC, Fragment } from "react";
import { ThemeIconTrayProp } from "../../types/types";
import { Container } from "../containers/containers";
import LightModeIcon from "../../assets/icons/lightmodeicon";
import DarkModeIcon from "../../assets/icons/darkmodeicon";
import SeperatorIcon from "../../assets/icons/seperatorIcon";
import "./ThemeIconTray.css";

const ThemeIconTray: FC<ThemeIconTrayProp> = ({ theme, lightModeEventHandler,  darkModeEVentHandler}) => {
  return (
    <Fragment>
      <Container className="theme-icon-tray">
        <LightModeIcon theme={theme} className="light-mode-icon" clickEvent={lightModeEventHandler} />
        <SeperatorIcon theme={theme} className="seperator-line-icon"/>
        <DarkModeIcon theme={theme} className="dark-mode-icon" clickEvent={darkModeEVentHandler} />
      </Container>
    </Fragment>
  );
};

export default ThemeIconTray;
