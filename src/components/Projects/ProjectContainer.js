import React from 'react'
import Title from '../Title/Title'
import style from './ProjectContainer.module.css'
import Project from './Project'
import technologies from '../myicons/technologies'
const ProjectContainer = () => {
  return (
    <div>
      <Title title="Projects" />
      <div className={style['projects-container']}>
      <Project 
  title="Sheet Storage" 
  images={["/imgs/projects/sheetstorage/1.png","/imgs/projects/sheetstorage/2.png","/imgs/projects/sheetstorage/3.png","/imgs/projects/sheetstorage/4.png"]} 

  bulletPoints={[
    "Leverage Google Sheets and Google Drive as a free storage system with easy integration.",
    "Saves data dynamically and supports file uploads with error handling."
  ]}
  technology={[
    technologies.javascript,
    technologies.html,
    technologies.appscript,
  ]}
  source='https://github.com/AhmadWajid/SheetStorage'
/>
      <Project 
  title="Non Profit Website" 
  images={["/imgs/projects/nonProfit/1.png","/imgs/projects/nonProfit/2.png","/imgs/projects/nonProfit/3.png"]} 

  bulletPoints={[
    "A responsive template website with built-in job search and news page.",
    "Simplifies content management by using a hero.csv file for news updates and a JSON file for job listings.",
  ]}
  technology={[
    technologies.javascript,
    technologies.html,
    technologies.css,
  ]}
  source='https://github.com/AhmadWajid/NonProfitWebsite'
/>
      <Project 
  title="Geniuz Manager" 
  images={["/imgs/projects/GeniuzManager/1.png","/imgs/projects/GeniuzManager/2.png","/imgs/projects/GeniuzManager/3.png"]} 
  bulletPoints={[
    "Manages user subscription roles via Discord integration.",
    "Allows administrators to generate and manage license keys.",
    "Assigns and removes roles based on subscription status."
  ]}
  technology={[
    technologies.python,
    technologies.discord,
  ]}
  source='https://github.com/AhmadWajid/Geniuz-Manager'
/>
<Project 
  title="eBay Scraper" 
  images={["/imgs/projects/eBay/3.png","/imgs/projects/eBay/2.png","/imgs/projects/eBay/1.png"]} 

  bulletPoints={[
    "Calculates the average price of a requested item on eBay.",
    "Includes a Python Flask version, accessible via a web interface.",
    "Integrates seamlessly with Discord for additional functionality."
  ]}
  technology={[
    technologies.python,
    technologies.discord,
  ]}
  source='https://github.com/AhmadWajid/Ebay-Bot'
/>

      </div>
    </div>
  )
}

export default ProjectContainer