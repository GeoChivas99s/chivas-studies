import React ,{FC} from 'react'
import { IButtonProps } from './button.types';
import style from  './button.module.scss'

const  Button:FC<{text:string}> = (props)  =>{
  return (
    <button className={style.botao}>{props.text}</button>
  )
}

export default Button;