import { Form , List , Cronometer} from "components";
import React , {useState} from "react";
import style from './App.module.scss'


function App() {
 const [ tasks , setTasks] = useState([
  {
    task:"Estudar Node",
    time:"01:00:00"
  }
 ]);

  return (
    <div className={style["AppStyle"]}>
      <Form  setTasks={setTasks} />
      <List  tasks={tasks}/>
      <Cronometer/>
    </div>
  );
}

export default App;
