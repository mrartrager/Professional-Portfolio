import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description, repo, link }) => {
  const overlayStyles = `absolute h-full w-full hover: opacity-0 hover:opacity-90 hover:bg-yellow transition duration-500
      bg-grey z-30 flex flex-col justify-center items-center text-center p-25 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();
  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair mt-20">{title}</p>
        <p className="m-5">{description}</p>
        <a href={repo} target="_blank" className="hover:cursor-pointer m-5 hover:text-red hover:scale-110 hover:font-bold">Github Repo</a>
        <a href={link} target="_blank" className="hover:cursor-pointer hover:text-blue hover:scale-110 hover:font-bold">Deployed Page</a>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
        Here you'll find a collection of projects that I've had the pleasure of building or contributing to. These projects not only represent my skill set but also serve as a testament to my passion for creating captivating user experiences.
With a strong focus on front-end development, I took charge of building the visually stunning interfaces for each of these projects. From crafting intuitive user flows to designing eye-catching layouts, I was heavily involved in every aspect of UI/UX design.
Feel free to explore each project by hovering over them. You'll have the option to either visit the live deployed page or delve into the intricacies of the code on GitHub. I believe that seeing these projects in action will provide a comprehensive understanding of my abilities.
Thank you for taking the time to browse through my portfolio. I hope you find these projects as inspiring as I found them fulfilling to work on.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[800px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project 
          title="GameBoxd" 
          description="This is a web app that allows a user to create an account, log in, search a large database of games, review and rank games, add their favorite games to thier profile."
          repo="https://github.com/WesleyLere/Gameboxd"
          />

          <Project 
          title="Sign of the Times"  
          description="Sign of the Times is a web app that lets a user pick a date, the user will be presented with the horoscope for that day, along with a list of famous people born on that day."
          repo="https://github.com/Nwsheats/Sign-of-the-Times"
          link="https://nwsheats.github.io/Sign-of-the-Times/"
          />
          {/* ROW 2 */}
          <Project 
          title="Budget App" 
          description="Spudget is a web app that allows a user to create an account, log in, create a budget, and track their spending. People can also uploade images of reciets and have taht data update their spending."
          repo="https://github.com/WesleyLere/Spudget"
          link="http://www.spudget.net/"
          />
          <Project 
          title="Cool Piano"
          description="This is a web app that allows a user to play a piano with their keyboard."
          repo="https://github.com/mrartrager/Playable-Piano"
          link="https://mrartrager.github.io/Playable-Piano/"
          />
          <Project 
          title="Drum Kit" 
          description="This is a web app that allows a user to play a drum machine with their keyboard."
          repo="https://github.com/mrartrager/Drum-Kit"
          link="https://mrartrager.github.io/Drum-Kit/"
          />

          {/* ROW 3 */}
          <Project title="Project 6" />
          <Project title="Project 7" />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[800px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
