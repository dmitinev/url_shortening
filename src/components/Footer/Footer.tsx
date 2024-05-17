import { footerBlockConfig, footerSocials } from '../../Config';
import { ReactComponent as FooterLogo } from '../../assets/logo.svg';
import './Footer.scss';
import { LinkBlock } from './LinkBlock';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <figure className="footer__logo">
          <FooterLogo />
        </figure>
        <div className="footer__linksBlock">
          {footerBlockConfig.map((block) => (
            <LinkBlock key={block.id} title={block.blockTitle} {...block} />
          ))}
        </div>
        <div className="footer__socials">
          {footerSocials.map((social) => (
            <a key={social.id} href={social.url}>
              <social.imageUrl />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
