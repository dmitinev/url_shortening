import { memo } from 'react';
import useMatchMedia from 'use-match-media-hook';
import { queries } from '../../Config';
import { MenuItems } from '../../types/types';
import { Button } from '../Button';
import './Menu.scss';

interface MenuProps {
  links: MenuItems;
  handleSignup?: () => void;
  handleLogin?: () => void;
}

export const Menu = memo(({ links, handleLogin, handleSignup }: MenuProps) => {
  const [mobile] = useMatchMedia(queries);
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
        {/* <Button>Log out</Button> */}
        <Button
          variant="link"
          style={mobile ? { color: '#fff' } : undefined}
          onClick={handleLogin}
        >
          Login
        </Button>
        <Button size={mobile ? 'large' : 'small'} onClick={handleSignup}>
          Sign up
        </Button>
      </div>
    </div>
  );
});
