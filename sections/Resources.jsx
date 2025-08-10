'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { blogTopics } from '../constants';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const Resources = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Resources" textStyles="text-center" />
      <TitleText title="Upcoming articles & guides" textStyles="text-center" />

      <div className="mt-[50px] grid md:grid-cols-2 gap-6">
        {blogTopics.map((topic, i) => (
          <motion.div
            key={topic}
            variants={fadeIn(i % 2 === 0 ? 'right' : 'left', 'tween', 0.12 * i, 0.8)}
            className="p-5 rounded-xl border border-[#2a2a2a] bg-[#202c38]/60 hover:bg-[#273544]/70 transition-colors group"
          >
            <h4 className="text-white font-medium text-[16px] leading-snug group-hover:text-[#6ab0ff]">{topic}</h4>
            <p className="text-secondary-white opacity-70 text-[12px] mt-3">Thought leadership coming soon. Want this early? Request access.</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Resources;
