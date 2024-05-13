import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useMemo, useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import useMatchMedia from 'use-match-media-hook';
import { menuItems, queries } from '../../Config';
import Logo from '../../assets/logo.svg';
import { Menu } from '../Menu';
import { Modal } from '../Modal';
import { SignUp } from '../SignUp';
import './Header.scss';

export const Header = () => {
  const [mobile] = useMatchMedia(queries);
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState<boolean>(false);
  const [isSignInOpen, setIsSignInOpen] = useState<boolean>(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState<boolean>(false);

  const handleIsMobileMenuOpened = useCallback(
    () => setIsMobileMenuOpened((prev) => !prev),
    [],
  );
  const handleIsSgnInOpened = useCallback(
    () => setIsSignInOpen((prev) => !prev),
    [],
  );
  const handleIsSignUpOpened = useCallback(
    () => setIsSignUpOpen((prev) => !prev),
    [],
  );

  const memoMenuItems = useMemo(() => menuItems, []);

  return (
    <>
      <header className="header container">
        <img src={Logo} alt="logo" className="header__image" />
        {mobile ? (
          <IoMenu
            onClick={handleIsMobileMenuOpened}
            className="header__burger"
          />
        ) : (
          <Menu
            links={memoMenuItems}
            handleLogin={handleIsSgnInOpened}
            handleSignup={handleIsSignUpOpened}
          />
        )}
        <AnimatePresence>
          {isMobileMenuOpened && mobile && (
            <motion.div
              className="header__mobileMenu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <Menu
                links={memoMenuItems}
                handleLogin={handleIsSgnInOpened}
                handleSignup={handleIsSignUpOpened}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <Modal open={isSignInOpen} onClose={handleIsSgnInOpened} title="Sign In">
        <SignUp handleClick={() => {}} title="Sign In" />
      </Modal>
      <Modal open={isSignUpOpen} onClose={handleIsSignUpOpened} title="Sign Up">
        <SignUp handleClick={() => {}} title="Sign Up" />
      </Modal>
    </>
  );
};
