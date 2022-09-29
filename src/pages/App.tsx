import { Form , List , Cronometer} from "components";
import React from "react";
import style from './App.module.scss'


function App() {
  return (
    <div className={style["AppStyle"]}>
      <Form />
      <List/>
      <Cronometer/>
    </div>
  );
}

export default App;
