import React ,{FC} from 'react'
import { IButtonProps } from './button.types';
import style from  './button.module.scss'

const  Button:FC<{text:string, type?:"button" | "submit" | "reset" | undefined}> = (props)  =>{
  const { type ="button"} = props;
  return (
    <button type={type} className={style.botao}>{props.text}</button>
  )
}

export default Button;