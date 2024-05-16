import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import { PageFeature } from 'src/types/types.ts';

interface FeatureItemProps extends Omit<PageFeature, 'id'> {}

export const FeatureItem = forwardRef<HTMLDivElement, FeatureItemProps>(
  ({ icon, title, body }: FeatureItemProps, ref) => {
    return (
      <article className="featureItem" ref={ref}>
        <figure>
          <img src={icon} alt={title} />
        </figure>
        <h3>{title}</h3>
        <p>{body}</p>
      </article>
    );
  },
);

export const MFeatureItem = motion(FeatureItem);
