import React, { useCallback, useState } from "react";
import { Button } from "components/botton";
import style from "./form.module.scss";
import { v4 } from "uuid";

interface IProps {
  setTasks: React.Dispatch<
    React.SetStateAction<
      {
        task: string;
        time: string;
        isSelected: boolean;
        isCompleted: boolean;
        id: string;
      }[]
    >
  >;
}
const Form = ({ setTasks }: IProps) => {
  const INITIAL_STATE = {
    task: "",
    time: "00:00:00",
    isSelected: false, 
    isCompleted: false, 
    id: v4() 
  };

  const [newStudies, setNewStudies] = useState(INITIAL_STATE);
  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTasks((prev) => [
      ...prev,
      { ...newStudies, isSelected: false, isCompleted: false, id: v4() },
    ]);
    setNewStudies(INITIAL_STATE);
  },[newStudies]);
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
