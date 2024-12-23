import React from 'react'
import style from './Footer.module.css'
const Footer = () => {
  return (
    <div id="footer" className={style['footer-container']}>
        <p className={style['footer-title']}>
        You've reached the END!
        </p>
        <p className={style['footer-copyright']}>
  Copyright © {new Date().getFullYear()} - Ahmad Wajid
</p>

        <p className={style['footer-design']}>
        Designed By: Ahmad Wajid
        </p>
        <p className={style['footer-email']}>
            ahmadwajid@ucla.edu
        </p>
        </div>
  )
}

export default Footer