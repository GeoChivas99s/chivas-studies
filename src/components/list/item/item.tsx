import React from "react";
import { memo } from "react";
import style from "../list.module.scss";

interface IProps {
  task: string;
  time: string;
  isSelected: boolean;
  isCompleted: boolean;
  id: string;
}
interface ItemProps extends IProps {
  handleSelectTask: (selectedTask: IProps) => void;
}

function Item({
  task,
  time,
  isSelected,
  isCompleted,
  id,
  handleSelectTask,
}: ItemProps) {
  return (
    <li
      className={  `${style.item} ${isSelected ? style.itemSelecionado : ''}` }
      onClick={() =>
        handleSelectTask({
          task,
          time,
          isSelected,
          isCompleted,
          id,
        })
      }
    >
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  );
}

export default memo(Item);
