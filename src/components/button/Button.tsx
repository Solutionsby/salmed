import "./button.scss";
import React from "react";

interface ButtonProps {
  children: string;
  link: string;
  classname: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  link,
  classname,
}) => {
  return (
    <div className={`button-wrapper ${classname}`}>
      <a href={link}>{children}</a>
    </div>
  );
};
