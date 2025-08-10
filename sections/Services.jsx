'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { services } from '../constants';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const Services = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Services" textStyles="text-center" />
      <TitleText title="What we build & deliver" textStyles="text-center" />

      <div className="mt-[50px] grid md:grid-cols-2 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            variants={fadeIn(i % 2 === 0 ? 'right' : 'left', 'tween', 0.15 * i, 0.8)}
            className="p-6 rounded-2xl border border-[#2a2a2a] bg-[#1F2A36]/60 backdrop-blur-md hover:bg-[#253241]/70 transition-colors"
          >
            <div className="flex items-start gap-4">
              <img src={s.icon} alt={s.title} className="w-10 h-10 object-contain" />
              <div>
                <h4 className="text-white font-semibold text-[20px] mb-2">{s.title}</h4>
                <p className="text-secondary-white text-[14px] leading-relaxed">{s.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Services;
