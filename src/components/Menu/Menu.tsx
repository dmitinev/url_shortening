import { memo } from 'react';
import { Button } from '../Button';
import { MenuItems } from '../Header';
import './Menu.scss';

interface MenuProps {
  links: MenuItems;
  handleSignup?: () => void;
  handleLogin?: () => void;
}

export const Menu = memo(({ links }: MenuProps) => {
  return (
    <div className="h_menu">
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
      <div className="menu_buttons">
        <Button>Log out</Button>
        <Button variant="link">Login</Button>
        <Button>Sign up</Button>
      </div>
    </div>
  );
});
