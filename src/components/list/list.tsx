import React, { FC } from "react";
import style from "./list.module.scss";
import Item from "./item/item";

interface ITask {
  task: string;
  time: string;
}

const List = ({ tasks }: { tasks: ITask[] }) => {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      {tasks.map((item, index) => {
        return <Item key={index} time={item.time} task={item.task} />;
      })}
    </aside>
  );
};
export default List;
