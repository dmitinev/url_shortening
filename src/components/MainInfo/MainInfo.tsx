import image from '../../assets/illustration-working.svg';
import { Button } from '../Button';
import './MainInfo.scss';

export const MainInfo = () => {
  return (
    <section className="mainInfo container">
      <div className="imageContainer">
        <img src={image} alt="hero working" className="imageContainer__image" />
      </div>
      <article className="mainInfoText">
        <h2 className="mainInfoText__heading">More than just shorter links</h2>
        <p className="mainInfoText__text">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button size="small">Get Started</Button>
      </article>
    </section>
  );
};
