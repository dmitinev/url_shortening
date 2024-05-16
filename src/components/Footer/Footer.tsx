import { ReactComponent as FooterLogo } from '../../assets/logo.svg';
import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <figure className="footer__logo">
          <FooterLogo />
        </figure>
      </div>
    </footer>
  );
};
