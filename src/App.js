import Navbar from './scenes/Navbar'
import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Dots from "./scenes/Dots";
import Landing from "./scenes/Landing";
import MySkills from "./scenes/MySkills";
import LineGradient from "./components/LineGradient"

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopofPage, setTopofPage] = useState('true')
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");


  useEffect(() =>{
    const handleScroll = () => {
      if(window.scrollY === 0) setTopofPage('true');
      if(window.scrollY !== 0) setTopofPage('false');
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);

  return <div className="app bg-deep-blue">
    <Navbar
    isTopofPage={isTopofPage}
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
    />
    <div className='w-5/6 mx-auto md:h-full'>
  {isAboveMediumScreens && (
    <Dots
    selectedPage={selectedPage}
    setSelectedPage={setSelectedPage}
    />
  )}
  <Landing setSelectedPage={setSelectedPage}/>
    </div>
    <LineGradient />
    <div className='w-5/6 mx-auto md:h-full'>
    <MySkills/>
    </div>
  </div>

}
export default App;
