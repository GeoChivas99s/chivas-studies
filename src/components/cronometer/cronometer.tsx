import { Button } from "components/botton";
import React from "react";
import Watch from "./watch/watch";
import style from './cronometer.module.scss'
function Cronometer() {
  return (
    <div className={style.cronometro}> 
      <p className={style.titulo}> Escolha um cark e inicie o cronômentro</p>
      <div className={style.relogioWrapper}> <Watch/> </div>
      <Button text="Começar!" />
    </div>
  );
}

export default Cronometer;
