import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:itmes-center md:h-full gap-16 py-10"
    >
      <div class="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreens ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 
            before:-left-20 before:rounded-t-[400px] before:w-full 
            before:max-w-[400px] before:h-full before:border-2
            before:border-blue before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-150 hover:rotate-6 hover:scale-105 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
              src="assets/About.png"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px]"
            src="assets/About.png"
          />
        )}
      </div>
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.9 }}
          transition={{ duration: 1.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Matthew {""}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[35px] before:-top-[75px] before:z-[-1]"
            >
              Waldron
            </span>
          </p>

          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            My name is Matthew Waldron, commonly referred to as Wally. I am a
            multi-faceted individual with experience and passion in front-end
            development, graphic design, are various art mediums.
            <br />I have a particular affinity for React and have discovered
            that Tailwind and React work seamlessly together. As a graphic
            designer, I also understand the significance of user interface and
            user experience and strive to incorporate those elements into my
            workflow.
          </p>
          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            Although my primary focus is on the front-end, I am also
            well-acquainted with the back-end, proficient in the use of Node.Js,
            Express.Js, MySQL, MongoDB, and Mongoose.
            <br />
            In my leisure time, I enjoy rock climbing, reading, drawing, and
            immersing myself in the latest video games and television shows.
            Right now I'm watching The Last of Us, and playing God of War.
          </p>
        </motion.div>

        <motion.div
        className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.9 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
<AnchorLink
className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
hover:bg-blue hover:text-white transition duration-500"
onClick={()=> setSelectedPage('contact')}
href="#contact"
>
Contact Me
</AnchorLink>

<AnchorLink
className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
onClick={()=> setSelectedPage('contact')}
href="#contact"
>
<div className="bg-deep-blue">
  Lets Talk.
</div>
</AnchorLink>

        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
