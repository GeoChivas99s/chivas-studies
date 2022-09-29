import React ,{FC} from 'react'
import { IButtonProps } from './button.types';
import style from  './button.module.scss'

const  Button = () =>{
  return (
    <button className={style.botao}>Lindo mesmo</button>
  )
}

export default Button;