import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Room from "./canvas/Room";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto bg-[#f393a8]`}>
      <div className="flex flex-row">
      <div
        className={`relative inset-0 top-[20vh] left-[10vw] max-w-5xl max-h-[3vh] mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
          <span className='text-[#915EFF]'>Welcome </span>to my portfolio
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
           My name's Lê Bá Lân <br className='sm:block hidden' />
           <h3 className='font-black text-white lg:text-[40px] sm:text-[40px] xs:text-[40px] text-[40px] lg:leading-[58px] mt-2'><span className='text-[#915EFF]'> ReactJS Developer </span></h3>
          
          </p>
        </div>
      </div>

      {/* <Room /> */}
        <div className="lg:w-full lg:h-screen"><Room /></div>
        
      </div>
     
      

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#332233c0] flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-[#332233c0] mb-1'
            />
          </div>
        </a>
        
      </div>
    </section>
  );
};

export default Hero;
