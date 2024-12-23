import React from 'react'
import Title from '../Title/Title'
import style from './ProjectContainer.module.css'
import Project from './Project'
const ProjectContainer = () => {
  return (
    <div>
      <Title title="Projects" />
      <div className={style['projects-container']}>
      <Project 
  title="Sheet Storage" 
  images={["https://github.com/AhmadWajid/SheetStorage/raw/main/images/SheetStorage.png","https://github.com/AhmadWajid/SheetStorage/raw/main/images/Config.png","https://github.com/AhmadWajid/SheetStorage/raw/main/images/open-apps-script.png","https://github.com/AhmadWajid/SheetStorage/raw/main/images/folder-id.png"]} 

  bulletPoints={[
    "Leverage Google Sheets and Google Drive as a free storage system with easy integration.",
    "Saves data dynamically and supports file uploads with error handling."
  ]}
  technology={[
    "https://skillforge.com/wp-content/uploads/2020/10/javascript.png",
    "https://cdn.worldvectorlogo.com/logos/html-1.svg",
    "https://www.gstatic.com/images/branding/product/2x/hh_apps_script_512dp.png",
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
    "https://skillforge.com/wp-content/uploads/2020/10/javascript.png",
    "https://cdn.worldvectorlogo.com/logos/html-1.svg",
    "https://seeklogo.com/images/C/css-3-logo-023C1A7171-seeklogo.com.png"
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
    "https://cdn.iconscout.com/icon/free/png-256/free-python-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-226051.png?f=webp&w=256",
    "https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png",
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
    "https://cdn.iconscout.com/icon/free/png-256/free-python-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-226051.png?f=webp&w=256",
    "https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png"
  ]}
  source='https://github.com/AhmadWajid/Ebay-Bot'
/>

      </div>
    </div>
  )
}

export default ProjectContainer