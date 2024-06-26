import { ChangeEvent, memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'src/store/loginSlice/loginSlice';
import { Button } from '../Button';
import './SignUp.scss';

interface SignUpProps {
  title: string;
  modalClose?: () => void;
}

const isEmailValid = (email: string) => {
  const re = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return re.test(email) && email.length > 0;
};

export const SignUp = memo(({ title, modalClose }: SignUpProps) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [touched, setTouched] = useState<{ email: boolean; password: boolean }>(
    {
      email: false,
      password: false,
    },
  );
  const [error, setError] = useState<{ email: boolean; password: boolean }>({
    email: false,
    password: false,
  });

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value);
  };

  const handleFocusMail = () => {
    setTouched((prev) => ({ ...prev, email: true }));
    if (!isEmailValid(email)) {
      setError((prev) => ({ ...prev, email: true }));
    } else {
      setError((prev) => ({ ...prev, email: false }));
      setTouched((prev) => ({ ...prev, email: false }));
    }
  };

  const handleFocusPass = () => {
    setTouched((prev) => ({ ...prev, password: true }));
    if (pass.length === 0) {
      setError((prev) => ({ ...prev, password: true }));
    } else {
      setError((prev) => ({ ...prev, password: false }));
      setTouched((prev) => ({ ...prev, password: false }));
    }
  };

  const handleClick = () => {
    if (Object.values(error).some((value) => value)) return;
    if (email.length > 0 && pass.length > 0) {
      dispatch(login({ email: email, password: pass }));
      modalClose && modalClose();
    }
  };

  return (
    <div className="signUpForm">
      <input
        type="email"
        placeholder="email"
        onChange={handleEmailChange}
        onBlur={handleFocusMail}
        value={email}
        className={touched.email ? 'error' : ''}
      />
      <input
        type="password"
        placeholder="password"
        onChange={handlePassChange}
        onBlur={handleFocusPass}
        className={touched.password ? 'error' : ''}
        value={pass}
      />
      {Object.values(touched).some((value) => value === true) &&
        Object.values(error).some((value) => value === true) && (
          <span className="signUpFieldError">
            *All fields must be valid and filled
          </span>
        )}
      <Button
        size="large"
        onClick={handleClick}
        disabled={
          (Object.values(touched).some((value) => value === true) &&
            Object.values(error).some((value) => value === true)) ||
          email.length === 0 ||
          pass.length === 0
        }
      >
        {title}
      </Button>
    </div>
  );
});
