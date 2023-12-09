import React, { ElementType } from "react";
import "./NavOption.css";
import { Icon, IconProps } from "@material-ui/core";

interface NavOptionProps {
  Icon: ElementType | string; // Accepts both React components and strings
  title: string; // Use lowercase for TypeScript types
}

export function NavOption({ Icon, title }: NavOptionProps) {
  return (
    <div className="navOption">
      {typeof Icon === "string" ? (
        <img
          src={Icon}
          alt="Icon"
          className="navOption__image"
          style={{ width: "40px" }}
        />
      ) : (
        Icon && <Icon className="navOption__icon" />
      )}
      <h6 className="navOption__title">{title}</h6>
    </div>
  );
}
