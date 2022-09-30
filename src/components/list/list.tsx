import React, { FC } from "react";
import style from "./list.module.scss";
import Item from "./item/item";

interface ITask {
  task: string;
  time: string;
  isSelected: boolean;
  isCompleted: boolean;
  id: string;
}

interface IProps {
  tasks: ITask[];
  handleSelectTask: (selectedTask: ITask) => void;
}

const List = ({tasks , handleSelectTask }: IProps) => {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      {tasks.map((item, index) => {
        return <Item 
        handleSelectTask={handleSelectTask}
        key={index} {...item} />;
      })}
    </aside>
  );
};
export default List;
