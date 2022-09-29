import React from "react";
import PropTypes from "prop-types";
import { Button } from "components/botton";
const Form = () => {
  return (
    <form action="">
      
      <div>
        <label htmlFor="task"> Adicione um novo estudo </label>
        <input type="text" name="task" id="task" placeholder="O que vc quer estudar" required/>
        
      </div>
      <div>
        <label htmlFor="time"></label>
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
