import Navbar from './scenes/Navbar'
import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Dots from "./scenes/Dots"
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
    <Dots className=''
    selectedPage={selectedPage}
    setSelectedPage={setSelectedPage}
    />
  )}
    </div>
  </div>

}
export default App;
