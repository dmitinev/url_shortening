import { Dispatch, useEffect } from 'react';
import { useLocalStorage } from 'src/hooks/useLocalStorage';
import { useAppSelector } from '../store-hooks';
import { loginSelector } from './loginSelectors';

export const useLogin = (): [boolean, Dispatch<boolean>] => {
  const [localLogin, setLocalLogin] = useLocalStorage('login', false);
  const { isAuth } = useAppSelector(loginSelector);

  useEffect(() => {
    setLocalLogin(isAuth);
  }, [isAuth]);

  return [localLogin as boolean, setLocalLogin];
};

