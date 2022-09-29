import React from "react";
import style from  './list.module.scss';
import Item from "./item/item";
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
         <Item key={index} {...item}/>
        );
      })}
    </aside>
  );
};
export default List;
