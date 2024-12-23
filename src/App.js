import './App.css'
import NavbarContainer from './components/Navbar/NavbarContainer'
import Section from "./components/Section/Section"
import HeroSection from './components/Hero/HeroSection';
import About from './components/About/About';
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/ProjectContainer'
import ContactSocials from './components/ContactSocials/ContactSocials';
import Footer from './components/Footer/Footer'

const App = () => {
  const floatingItems = [
    {
      src: 'https://png.pngtree.com/png-vector/20221010/ourmid/pngtree-laptop-clipart-png-image_6276633.png',
      alt: 'Laptop',
      size: '4rem',
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png',
      alt: 'C++ Logo',
      size: '4rem',
    },
    {
      src: 'https://cdn-icons-png.flaticon.com/512/732/732212.png',
      alt: 'HTML Logo',
      size: '4rem',
    },    
    {
      src: 'https://skillforge.com/wp-content/uploads/2020/10/javascript.png',
      alt: 'Javascript Logo',
      size: '4rem',
    },
    {
      src: 'https://www.logolynx.com/images/logolynx/c9/c981cbd34007b6376635105871346a2a.png',
      alt: 'Python Logo',
      size: '4rem',
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
      alt: 'React Logo',
      size: '4rem',
    },
    ,
    {
      src: 'https://cdn-icons-png.flaticon.com/512/732/732212.png',
      alt: 'HTML Logo',
      size: '4rem',
    },    
    {
      src: 'https://skillforge.com/wp-content/uploads/2020/10/javascript.png',
      alt: 'Javascript Logo',
      size: '4rem',
    },
    {
      src: 'https://www.logolynx.com/images/logolynx/c9/c981cbd34007b6376635105871346a2a.png',
      alt: 'Python Logo',
      size: '4rem',
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
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
