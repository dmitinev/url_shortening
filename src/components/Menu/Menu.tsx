import { memo } from 'react';
import { MenuItems } from '../Header';
import './Menu.scss';

interface MenuProps {
  links: MenuItems;
  handleSignup: () => void;
  handleLogin: () => void;
}

export const Menu = memo(({ links, handleSignup, handleLogin }: MenuProps) => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        {links.map(({ url, text }) => (
          <li key={text} className="menu__item">
            <a href={url} className="menu__link">
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
});
