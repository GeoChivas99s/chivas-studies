import React from "react";
import { memo } from "react";
import style from "../list.module.scss";

interface IProps {
  task: string;
  time: string;
}

function Item({ task, time }: IProps) {
  return (
    <li className={style.item}>
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  );
}

export default memo(Item);
