import React from 'react'
import style from './Title.module.css'
const Title = ({title}) => {
  return (
    <p className={style['title']}>
            {title}
        </p>
  )
}

export default Title