import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "components/botton";
import style from "./form.module.scss";

interface IProps {
  setTasks: React.Dispatch<
    React.SetStateAction<
      {
        task: string;
        time: string;
      }[]
    >
  >;
}
const Form = ({ setTasks }: IProps) => {
  const INITIAL_STATE = {
    task: "",
    time: "00:00:00",
  };

  const [newStudies, setNewStudies] = useState(INITIAL_STATE);
  console.log("asaskjhajhsga");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTasks((prev) => [...prev, { ...newStudies }]);
    setNewStudies(INITIAL_STATE);
  };
  return (
    <form className={style.novaTarefa} onSubmit={handleSubmit}>
      <div className={style.inputContainer}>
        <label htmlFor="task"> Adicione um novo estudo </label>
        <input
          type="text"
          name="task"
          id="task"
          value={newStudies.task}
          placeholder="O que vc quer estudar"
          onChange={(event) =>
            setNewStudies({ ...newStudies, task: event.target.value })
          }
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">Tempo</label>
        <input
          type="time"
          value={newStudies.time}
          step="1"
          id="time"
          name="time"
          min="00:00:00"
          max="01:30:00"
          onChange={(event) =>
            setNewStudies({ ...newStudies, time: event.target.value })
          }
          required
        />
      </div>
      <Button type="submit" text="Adicionar" />
    </form>
  );
};

export default Form;
