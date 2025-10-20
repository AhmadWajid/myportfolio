import React from 'react'
import style from './Skills.module.css'
import Title from '../Title/Title'
import SkillCard from './SkillCard'
import technologies from '../myicons/technologies';

const Skills = () => {
  return (
    <div id="skills" className={style["skills"]}>
      <Title title="Skills" />
      <div className={style['skills-cardcontainer']}>
      <SkillCard img={technologies.javascript} text='Javascript'/>
      <SkillCard img={technologies.cpp} text='C++'/>
      <SkillCard img={technologies.python} text='Python'/>
      <SkillCard img={technologies.html} text='HTML'/>
      <SkillCard img={technologies.css} text='CSS'/>
      <SkillCard img={technologies.react} text='React'/>
      <SkillCard img={technologies.gemini} text='Gemini AI'/>
      <SkillCard img={technologies.postgres} text='PostgreSQL'/>
      <SkillCard img={technologies.firebase} text='Firebase'/>
      <SkillCard img={technologies.appscript} text='Google App Scripts'/>
      <SkillCard img={technologies.msoffice} text='MS Office'/>
      <SkillCard img={technologies.pythonflask} text='Python Flask'/>
      </div>
      </div>
  )
}

export default Skills