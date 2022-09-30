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

const List = ({ tasks }: { tasks: ITask[] }) => {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      {tasks.map((item, index) => {
        return <Item key={index} {...item} />;
      })}
    </aside>
  );
};
export default List;
