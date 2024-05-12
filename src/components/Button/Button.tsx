import cn from 'classnames';
import { forwardRef } from 'react';
import './Button.scss';

interface ButtonProps {
  onClick?: () => void;
  variant?: 'square' | 'link' | '';
  size?: 'small' | 'medium' | 'large';
  type?: 'button' | 'submit';
  children: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      onClick,
      variant = '',
      size = 'medium',
      type = 'button',
      children,
    }: ButtonProps,
    ref,
  ) => {
    const mainClasses = cn('button', {
      'button--square': variant === 'square',
      'button--link': variant === 'link',
      'button--small': size === 'small',
      'button--medium': size === 'medium',
      'button--large': size === 'large',
    });

    return (
      <button ref={ref} onClick={onClick} className={mainClasses} type={type}>
        {children}
      </button>
    );
  },
);
