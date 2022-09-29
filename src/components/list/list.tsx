import React from "react";
import style from  './list.module.scss';

const List = () => {
  const tasks = [
    {
      task: "React",
      time: "00:20:00",
    },
    {
      task: "Typescript",
      time: "00:20:00",
    },
  ];

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      {tasks.map((item, index) => {
        return (
          <li key={index} className={style.item}>
            <h3>{item.task}</h3>
            <span>{item.time}</span> 
          </li>
        );
      })}
    </aside>
  );
};
export default List;
