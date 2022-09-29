import { Form , List} from "components";
import React from "react";
import style from './App.module.scss'

function App() {
  return (
    <div className={style["AppStyle"]}>
      <Form />
      <List/>
    </div>
  );
}

export default App;
