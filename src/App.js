import Navbar from './scenes/Navbar'
import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Dots from "./scenes/Dots";
import Landing from "./scenes/Landing";
import MySkills from "./scenes/MySkills";
import LineGradient from "./components/LineGradient";
import Projects from "./scenes/Projects";
import { motion } from "framer-motion";


function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopofPage, setTopofPage] = useState('true')
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");


  useEffect(() =>{
    const handleScroll = () => {
      if(window.scrollY === 0){
        setTopofPage('true');
        setSelectedPage("home")
      };
      if(window.scrollY !== 0) setTopofPage('false');
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);

  return (
    <div className="app bg-deep-blue">
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
    <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("home")}
        >
          <Landing setSelectedPage={setSelectedPage}/>
        </motion.div>
    </div>


    <LineGradient />


    <div className='w-5/6 mx-auto md:h-full'>
    <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("skills")}
        >
    <MySkills/>
    <LineGradient />
    </motion.div>
    </div>
    


    <div className='w-5/6 mx-auto sm:mt-60'>
    <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("projects")}
        >
    <Projects/>
    </motion.div>
    </div>

    <LineGradient />
  </div>
  )
  

}
export default App;
