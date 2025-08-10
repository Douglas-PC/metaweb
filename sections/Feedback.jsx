'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.45] max-w-[460px] w-full mx-auto self-center flex flex-col gradient-05 sm:px-12 sm:py-9 px-7 py-6 rounded-[36px] border border-[#6a6a6a]/60 relative shadow-[0_6px_28px_-6px_rgba(0,0,0,0.45)] backdrop-blur-[3px]"
      >
        <div className="feedback-gradient" />
        <div className="pr-2">
          <p className="font-semibold sm:text-[15px] text-[12px] sm:leading-[22px] leading-[18px] text-white/90 tracking-wide">Douglas PC</p>
          <h4 className="mt-1 font-bold sm:text-[30px] text-[24px] sm:leading-[38px] leading-[32px] text-white tracking-tight">Innovation Partner</h4>
        </div>
        <p className="mt-6 font-normal sm:text-[22px] text-[17px] sm:leading-[40px] leading-[34px] text-white/95">
          “We created Douglas PC to help organizations move faster with clarity. Innovation isn't a buzzword—it's the compound result of focused strategy, great design, and disciplined engineering.”
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center item-center"
      >
        <img src="/planet-09.png" alt="planet" className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]" />
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <img src="/stamp.png" alt="stamp" className="md:w-[170px] w-[115px]  md:h-[170px] h-[115px] object-contain" />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
