import React from "react";
import PropTypes from "prop-types";
import { Button } from "components/botton";
import './style.scss';

const Form = () => {
  return (
    <form action="" className="novaTarefa">
      
      <div className="inputContainer">
        <label htmlFor="task"> Adicione um novo estudo </label>
        <input type="text" name="task" id="task" placeholder="O que vc quer estudar" required/>
        
      </div>
      <div className="inputContainer">
        <label htmlFor="time">Tempo</label>
        <input type="time" 
        step="1"
        id="time"
        name="time"
        min="00:00:00"
        max="01:30:00"
        required
        />
      </div>
      <Button />
    </form>
  );
};

export default Form;
