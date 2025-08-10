'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={(
          <>
            Track friends around you and invite them to play together in the same world
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[69px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        {/* Here We are displaying chararcters on the map */}
        <div className="absolute top-[32%] left-[62%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute sm:top-10 bottom-40 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-03.png" alt="people" className="w-full h-full" />
        </div>
        <div className="hidden lg:block absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-04.png" alt="people" className="w-full h-full" />
        </div>

        <div className="hidden lg:block absolute bottom-[20%] left-[15%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-05.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-0 right-[22%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-06.png" alt="people" className="w-full h-full" />
        </div>
        {/* Central Florida member with label & pulse */}
        {/* Southeastern US (bottom-right corner of continental USA). Adjust top/left % if map asset changes. */}
        <div
          className="absolute top-[63%] left-[57%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] shadow-[0_0_0_3px_rgba(255,255,255,0.25)] flex items-center justify-center group"
          aria-label="Team member - Central Florida"
        >
          {/* Removed pulse animation for a static marker */}
          <img src="/people-01.png" alt="Central Florida member" className="relative w-full h-full rounded-full" />
          <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white text-[11px] sm:text-xs px-2 py-1 rounded-full font-medium tracking-wide whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Central Florida
          </span>
        </div>
        {/* Character on Map ends */}

      </motion.div>
    </motion.div>
  </section>
);

export default World;
