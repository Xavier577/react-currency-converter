import React, { FC } from "react";
import { ContainerProp, CardProp } from "../../types/types";
import "./containers.css";

export const Container: FC<ContainerProp> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export const Card: FC<CardProp> = ({ className, variant, children }) => {
  return (
    <div
      className={`${variant ? variant : null} ${className ? className : null}`}
    >
      {children}
    </div>
  );
};
