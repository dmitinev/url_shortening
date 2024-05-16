import cn from 'classnames';
import { motion } from 'framer-motion';
import { CSSProperties, forwardRef } from 'react';
import './Button.scss';

interface ButtonProps {
  onClick?: () => void;
  variant?: 'square' | 'link' | '';
  size?: 'small' | 'medium' | 'large';
  type?: 'button' | 'submit';
  children: string;
  style?: CSSProperties;
  disabled?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      onClick,
      variant = '',
      size = 'medium',
      type = 'button',
      children,
      style,
      disabled,
    }: ButtonProps,
    ref,
  ) => {
    const mainClasses = cn('button', {
      button__square: variant === 'square',
      button__link: variant === 'link',
      button__small: size === 'small',
      button__medium: size === 'medium',
      button__large: size === 'large',
    });

    return (
      <button
        disabled={disabled}
        ref={ref}
        onClick={onClick}
        className={mainClasses}
        type={type}
        style={style}
      >
        {children}
      </button>
    );
  },
);

export const Mbutton = motion(Button);
