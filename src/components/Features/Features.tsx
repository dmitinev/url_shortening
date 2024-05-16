import { FeatureItem } from 'components/Features/FeatureItem.tsx';
import { pageFeatures } from '../../Config.ts';
import './Features.scss';

export const Features = () => {
  return (
    <main className="features">
      <div className="container features__container">
        <header className="features__header">Advanced Statistics</header>
        <p className="features__text">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className="features__items">
          {pageFeatures.length > 0 &&
            pageFeatures.map(({ body, title, id, icon }) => {
              return (
                <FeatureItem key={id} title={title} body={body} icon={icon} />
              );
            })}
        </div>
      </div>
    </main>
  );
};
