import './App.css'
import NavbarContainer from './components/Navbar/NavbarContainer'
import Section from "./components/Section/Section"
import HeroSection from './components/Hero/HeroSection';
import About from './components/About/About';
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/ProjectContainer'
import ContactSocials from './components/ContactSocials/ContactSocials';
import Footer from './components/Footer/Footer'
import technologies from './components/myicons/technologies';

const App = () => {
  const floatingItems = [
    {
      src: technologies.laptop,
      alt: 'Laptop',
      size: '4rem',
    },
    {
      src: technologies.cpp,
      alt: 'C++ Logo',
      size: '4rem',
    },
    {
      src: technologies.appscript,
      alt: 'Appscript Logo',
      size: '4rem',
    },    
    {
      src: technologies.javascript,
      alt: 'Javascript Logo',
      size: '4rem',
    },
    {
      src: technologies.css,
      alt: 'CSS Logo',
      size: '4rem',
    },
    {
      src: technologies.react,
      alt: 'React Logo',
      size: '4rem',
    },
    ,
    {
      src: technologies.html,
      alt: 'HTML Logo',
      size: '4rem',
    },    
    {
      src: technologies.javascript,
      alt: 'Javascript Logo',
      size: '4rem',
    },
    {
      src: technologies.python,
      alt: 'Python Logo',
      size: '4rem',
    },
    {
      src: technologies.react,
      alt: 'React Logo',
      size: '4rem',
    },
  ];


  return (
    <div className="App">
      <NavbarContainer/>
      <Section backgroundColor="none" floatingItems={floatingItems}>
        <HeroSection subtitle={['Student', 'Programmer', 'Developer']} name="Ahmad Wajid"/>
      </Section>
      <Section backgroundColor="white" >
        <About/>
      </Section>
      <Section backgroundColor="none" floatingItems={floatingItems}>
        <Skills/>
      </Section>
      <Section backgroundColor="white">
        <Projects/>
      </Section>
      <Section backgroundColor="#dbdbdb">
        <ContactSocials/>
      </Section>
      <Footer/>
    </div>
  );
}
export default App;
