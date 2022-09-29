import React from "react";

function List() {
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
    <aside>
      {tasks.map((item, index) => {
        return (
          <li key={index}>
            <h3>{item.task}</h3>
            <span>{item.time}</span>
          </li>
        );
      })}
    </aside>
  );
}
export default List;
