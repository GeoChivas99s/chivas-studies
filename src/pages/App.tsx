import { Form , List , Cronometer} from "components";
import React , {useState} from "react";
import style from './App.module.scss'

interface IProps {
  task:string;
  time:string;
}

function App() {
 const [ tasks , setTasks] = useState<IProps[]>([]);

  return (
    <div className={style["AppStyle"]}>
      <Form  setTasks={setTasks} />
      <List  tasks={tasks}/>
      <Cronometer/>
    </div>
  );
}

export default App;
