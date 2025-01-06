import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import codebg from '../assets/backgrounds/code-bg.jpeg';
// import { worldmap } from '../assets';

const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={codebg}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={codebg}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}>
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}>
              Hi, I'm{' '}
              <span
                className="sm:text-battleGray sm:text-[90px] 
                text-eerieBlack text-[50px] font-mova
                font-extrabold uppercase">
                DanF              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
            A full stack software developer . <br className="sm:block hidden" />
            </p>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"></div>

          <div></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center">
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
        {/* <div>
          <img
            className="absolute bottom-0 ml-[100vw] 
            lg:ml-[175vw] md:ml-[160vw] xmd:ml-[160vw] 2xl:ml-[183vw]
            sm:h-[190vh] md:h-[170vh] xl:h-[180vh]"
            src={hero}
            alt="shaquille"
          />
        </div> */}
           
        {/* Social Media Icons */}
        <div className="absolute top-2/3 right-5 flex flex-col items-center gap-4 z-10">
          <a href="https://github.com/Grd-32" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-[32px] text-eerieWhite hover:text-dim transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/daniel-fundi-5159aa1b5" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-[32px] text-eerieWhite hover:text-dim transition duration-300" />
          </a>
          <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-[32px] text-eerieWhite hover:text-dim transition duration-300" />
          </a>
          <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-[32px] text-eerieWhite hover:text-dim transition duration-300" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
