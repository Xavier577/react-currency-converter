import React, { FC, Fragment } from "react";
import { Theme } from "../../types/types";
import { Container } from "../containers/containers";
import LightModeIcon from "../../assets/icons/lightmodeicon";
import DarkModeIcon from "../../assets/icons/darkmodeicon";
import SeperatorIcon from "../../assets/icons/seperatorIcon";
import "./ThemeIconTray.css";

const ThemeIconTray: FC<{ theme?: Theme }> = ({ theme }) => {
  return (
    <Fragment>
      <Container className="theme-icon-tray">
        <LightModeIcon theme={theme} className="light-mode-icon" />
        <SeperatorIcon theme={theme} className="seperator-line-icon" />
        <DarkModeIcon theme={theme} className="dark-mode-icon" />
      </Container>
    </Fragment>
  );
};

export default ThemeIconTray;
