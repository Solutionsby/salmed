import "./button.scss";
import React from "react";

interface ButtonProps {
  children: string;
  link: string;
}

export const Button: React.FC<ButtonProps> = ({ children, link }) => {
  return (
    <div className="button-wrapper">
      <a href={link}>{children}</a>
    </div>
  );
};
