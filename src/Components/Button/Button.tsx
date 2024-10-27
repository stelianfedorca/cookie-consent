import { MouseEvent } from 'react';
import './Button.css';
import clsx from 'clsx';

type ButtonVariants = 'primary' | 'secondary' | 'tertiary';

type Props = {
  variant?: ButtonVariants;
  disabled?: boolean;
  title: string;
  styles?: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

export function Button({
  variant = 'primary',
  disabled = false,
  title,
  styles,
  onClick,
}: Props) {
  const defaultStyles = clsx({
    ['button']: true,
    [variant]: true,
    ['disabled']: disabled,
  });
  return (
    <button
      className={clsx(defaultStyles, styles)}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
}
