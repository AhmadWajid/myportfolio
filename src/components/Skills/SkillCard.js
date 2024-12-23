import React from 'react'
import style from './SkillCard.module.css'
const SkillCard = ({img, text}) => {
  return (
    <div className={style['card-container']}>
        <img src={img} alt={text}/>
        <p>{text}</p>
    </div>
  )
}

export default SkillCard