import cn from 'classnames';
import { CSSProperties, forwardRef } from 'react';
import './Button.scss';

interface ButtonProps {
  onClick?: () => void;
  variant?: 'square' | 'link' | '';
  size?: 'small' | 'medium' | 'large';
  type?: 'button' | 'submit';
  children: string;
  style?: CSSProperties;
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
