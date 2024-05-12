import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
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
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState<boolean>(false);

  const handleIsMobileMenuOpened = () => setIsMobileMenuOpened((prev) => !prev);

  const memoMenuItems = useMemo(() => menuItems, []);

  return (
    <header className="header container" id="pageHeader">
      <img src={Logo} alt="logo" className="header__image" />
      {mobile ? (
        <IoMenu onClick={handleIsMobileMenuOpened} className="header__burger" />
      ) : (
        <Menu links={memoMenuItems} />
      )}
      <AnimatePresence>
        {isMobileMenuOpened && mobile && (
          <motion.div
            className="header__mobileMenu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <Menu links={memoMenuItems} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
