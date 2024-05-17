import { FooterLinks } from 'src/types/types';

interface LinkBlockProps {
  title: string;
  links: FooterLinks;
}

export const LinkBlock = ({ title, links }: LinkBlockProps) => {
  return (
    <section className="linkBlock__item">
      <h4>{title}</h4>
      {links.map((link) => (
        <a href={link.url} key={link.text}>
          {link.text}
        </a>
      ))}
    </section>
  );
};

