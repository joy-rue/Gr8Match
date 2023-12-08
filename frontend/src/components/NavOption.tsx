import React, { ElementType } from "react";
import "./NavOption.css";
import { Icon, IconProps } from "@material-ui/core";

interface props {
  Icon: ElementType;
  title: String;
}

export function NavOption({ Icon, title }: props) {
  return (
    <div className="navOption">
      {Icon && <Icon className="navOption__icon" />}
      <h6 className="navOption__title">{title}</h6>
    </div>
  );
}
