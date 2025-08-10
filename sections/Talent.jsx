'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { talentHighlights } from '../constants';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const Talent = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Talent" textStyles="text-center" />
      <TitleText title="People who build the future" textStyles="text-center" />

      <div className="mt-[50px] flex flex-col gap-6">
        {talentHighlights.map((t, i) => (
          <motion.div
            key={t.name}
            variants={fadeIn('up', 'tween', 0.1 * i, 0.8)}
            className="p-6 rounded-2xl border border-[#2a2a2a] bg-[#1A232E]/60 backdrop-blur-md"
          >
            <h4 className="text-white font-semibold text-[20px]">{t.name}</h4>
            <p className="text-[#6ab0ff] text-[14px] mt-1">{t.focus}</p>
            <p className="text-secondary-white text-[14px] mt-3 leading-relaxed">{t.impact}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Talent;
