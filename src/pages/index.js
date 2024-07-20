import React , {useState}  from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/NavBar'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/infoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/infoSection/Data';
import Services from '../components/Services';

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
    <Servicesces/>
    <InfoSection {...homeObjThree} />
    </>
  )
}

export default Home