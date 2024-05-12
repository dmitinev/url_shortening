import { ChangeEvent, useState } from 'react';
import { Button } from '../Button';
import './SignUp.scss';

interface SignUpProps {
  handleClick: () => void;
  title: string;
}

export const SignUp = ({ handleClick, title }: SignUpProps) => {
  const [email, setEmail] = useState<string>('');
  const [pass, setPass] = useState<string>('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value);
  };

  return (
    <div className="signUpForm">
      <input
        type="email"
        placeholder="email"
        onChange={handleEmailChange}
        value={email}
      />
      <input
        type="password"
        placeholder="password"
        onChange={handlePassChange}
        value={pass}
      />
      <Button size="large" onClick={handleClick}>
        {title}
      </Button>
    </div>
  );
};
