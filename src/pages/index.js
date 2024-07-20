import React , {useState}  from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/NavBar'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/infoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/infoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';

const Home = () => {
    const [isOpen, setIsOpen]   = useState(false);
    
    const toggle = () => {
      setIsOpen(!isOpen) 
    }
    //holatically
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
    <HeroSection/>
    <InfoSection {...homeObjOne} />
    <InfoSection {...homeObjTwo} />
    <Services/>
    <InfoSection {...homeObjThree} />
    <Footer/>
    </>
  )
}

export default Home