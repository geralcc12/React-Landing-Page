import React , {useState}  from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/NavBar'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/infoSection';
import { homeObjOne, homeObjThree, homeObjTwo,homeObjFour } from '../components/infoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';
import Contact from '../components/ContactSection';

const Home = () => {
    const [isOpen, setIsOpen]   = useState(false);
    
    const toggle = () => {
      setIsOpen(!isOpen) 
    }
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
    <HeroSection/>
    <InfoSection {...homeObjOne} />
    <InfoSection {...homeObjTwo} />
    <Services/>
    <InfoSection {...homeObjThree} />
    
    <Contact {...homeObjFour} />

    <Footer/>
    </>
  )
}

export default Home