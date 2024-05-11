import { useMemo } from 'react';
import { IoMenu } from 'react-icons/io5';
import useMatchMedia from 'use-match-media-hook';
import Logo from '../../assets/logo.svg';
import { Menu } from '../Menu';
import './Header.scss';

export type MenuItems = { url: string; text: string }[];

const menuItems: MenuItems = [
  { url: '#', text: 'Features' },
  { url: '#', text: 'Prices' },
  { url: '#', text: 'Resources' },
];

const queries: string[] = ['(max-width: 766px)', '(min-width: 767px)'];

export const Header = () => {
  const [mobile] = useMatchMedia(queries);

  const memoMenuItems = useMemo(() => menuItems, []);

  return (
    <header className="header container">
      <img src={Logo} alt="logo" className="header__image" />
      {mobile ? (
        <IoMenu className="header__burger" />
      ) : (
        <Menu
          links={memoMenuItems}
          handleLogin={() => {}}
          handleSignup={() => {}}
        />
      )}
    </header>
  );
};
