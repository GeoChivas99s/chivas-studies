import { Form, List, Cronometer } from "components";
import  {  useState } from "react";
import style from "./App.module.scss";

interface IProps {
  task: string;
  time: string;
  isSelected: boolean;
  isCompleted: boolean;
  id: string;
}

function App() {
  const [tasks, setTasks] = useState<IProps[]>([]);
  const [selected, setSelected] = useState<IProps>();

  const handleSelectTask = 
    (selectedTask: IProps) => {
      setSelected(selectedTask);
      setTasks((prev) =>
        prev.map((task) => ({
          ...task,
          isSelected: task.id === selected?.id,
        }))
      );
    }


  return (
    <div className={style["AppStyle"]}>
      <Form setTasks={setTasks} />
      <List handleSelectTask={handleSelectTask} tasks={tasks} />
      <Cronometer />
    </div>
  );
}

export default App;
