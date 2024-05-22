import { MFeatureItem } from 'components/Features/FeatureItem.tsx';
import { motion } from 'framer-motion';
import { pageFeatures } from '../../Config.ts';
import './Features.scss';

const textAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.15 },
  }),
};

const textAnimationHorizontal = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const featureAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

export const Features = () => {
  return (
    <motion.main
      className="features"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
    >
      <div className="container features__container">
        <motion.header
          className="features__header"
          custom={1}
          variants={textAnimation}
        >
          Advanced Statistics
        </motion.header>
        <motion.p
          className="features__text"
          custom={2}
          variants={textAnimationHorizontal}
        >
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </motion.p>
        <motion.div
          className="features__items"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          {pageFeatures.length > 0 &&
            pageFeatures.map(({ body, title, id, icon }, index) => {
              return (
                <MFeatureItem
                  custom={index + 1}
                  variants={featureAnimation}
                  key={id}
                  title={title}
                  body={body}
                  icon={icon}
                />
              );
            })}
        </motion.div>
      </div>
    </motion.main>
  );
};
