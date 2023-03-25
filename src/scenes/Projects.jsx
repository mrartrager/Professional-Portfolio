import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const contianer = {
    hidden: {  },
    visible: {
        transition: { staggerChilden: 0.2,  },
}
};

const projectVarient ={
    hidden: { opacity: 0, scale:0.8 },
    visible: { opacity: 1, scale:1 },
} 


const Project = ({title}) => {
    const overlayStyles = `absolute w-full h-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center text-deep-blue`;
    const projectTitle =title.split(" ").join("-").toLowerCase();

    return (
        <motion.div varients={projectVarient} className="relative">
            <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
            </div>

        </motion.div>
    )
}

const Projects = () => {
return(
    <section id='projects' className="pt-48 pb-48">
<motion.div
          className="md:w-2/5 mx-auot text-center"
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
          <LineGradient width="w-1/3" />
          </div>
            </div>
          <p className="mt-10 mb-10">
            Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
            fames odio in at.
          </p>
        </motion.div>


        <div className="flex -justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={contianer}
        >
<div className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] font-playfair font-semibold">

    BEAUTIFUL USER INTERFACES
</div>
< Project title="Project 1"/>
        </motion.div>
        </div>
    </section>
)
};

export default Projects;