import React from "react";

export interface IButtonProps {
  handleClick:(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  text: string;
}
