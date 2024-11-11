import { motion } from "framer-motion";
import { styles } from "../styles";
import myImage from '../assets/profilePic.png';

const Hero = () => {
  return (
    <section
      className={`relative w-full h-screen mx-auto overflow-y-auto md:overflow-y-hidden`} // Manage overflow
    >
      <div
        className={`absolute inset-0 top-[120px] w-full mx-auto ${styles.paddingX} flex flex-col md:flex-row items-start gap-5`}
        style={{ justifyContent: "space-between" }}
      >
        <div style={{ display: "flex" }}>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">Asitha</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Tech enthusiast exploring opportunities, creating solutions, and empowering others’ potential.           
            </p>
          </div>
        </div>

        {/* Profile Picture with Hover Animation */}
        <div className="mt-10 md:mt-0 md:ml-5 flex justify-center w-full md:w-auto">
          <img
            src={myImage}
            alt="pic"
            className="w-1/2 sm:w-2/3 md:w-3/4 lg:w-full xl:w-[25em] 2xl:w-[35em] max-w-none h-auto mb-16 sm:mb-20 md:mb-0 
              transition-transform duration-300 ease-in-out transform hover:scale-105 hover:z-10" // Added scale and z-index on hover
          />
        </div>
      </div>

      {/* Arrow section placed at the bottom of the screen */}
      <div className="absolute bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
