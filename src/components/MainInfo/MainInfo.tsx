import { motion } from 'framer-motion';
import image from '../../assets/illustration-working.svg';
import { MButton } from '../Button';
import './MainInfo.scss';

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.15 },
  }),
};

export const MainInfo = () => {
  return (
    <motion.section
      className="mainInfo container"
      initial="hidden"
      whileInView="visible"
    >
      <div className="imageContainer">
        <img src={image} alt="hero working" className="imageContainer__image" />
      </div>
      <article className="mainInfoText">
        <motion.h2
          custom={1}
          variants={textAnimation}
          className="mainInfoText__heading"
        >
          More than just shorter links
        </motion.h2>
        <motion.p
          custom={2}
          variants={textAnimation}
          className="mainInfoText__text"
        >
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </motion.p>
        <MButton custom={3} variants={textAnimation} size="small">
          Get Started
        </MButton>
      </article>
    </motion.section>
  );
};
