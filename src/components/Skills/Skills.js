import React from 'react'
import style from './Skills.module.css'
import Title from '../Title/Title'
import SkillCard from './SkillCard'
const Skills = () => {
  return (
    <div id="skills" className={style["skills"]}>
      <Title title="Skills" />
      <div className={style['skills-cardcontainer']}>
      <SkillCard img="https://skillforge.com/wp-content/uploads/2020/10/javascript.png" text='Javascript'/>
      <SkillCard img="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png" text='C++'/>
      <SkillCard img="https://www.logolynx.com/images/logolynx/c9/c981cbd34007b6376635105871346a2a.png" text='Python'/>
      <SkillCard img="https://cdn.worldvectorlogo.com/logos/html-1.svg" text='HTML'/>
      <SkillCard img="https://seeklogo.com/images/C/css-3-logo-023C1A7171-seeklogo.com.png" text='CSS'/>
      <SkillCard img="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" text='React'/>
      <SkillCard img="https://www.gstatic.com/images/branding/product/2x/hh_apps_script_512dp.png" text='Google App Scripts'/>
      <SkillCard img="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Microsoft_Office_logo_%282013%E2%80%932019%29.svg/648px-Microsoft_Office_logo_%282013%E2%80%932019%29.svg.png" text='MS Office'/>
      <SkillCard img="https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/flask-qvsfwhwywucb6zv0d7ce.png/flask-1byb2jlw6nwim4nx2248xg.png?_a=DAJFJtWIZAAC" text='Python Flask'/>
      </div>
      </div>
  )
}

export default Skills