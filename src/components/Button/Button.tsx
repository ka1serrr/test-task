import { FC } from 'react';
import styles from './Button.module.scss';
interface Props {
  text: string;
  onClick: (...args: any) => any;
  style?: string;
  disabled?: boolean;
}

export const Button: FC<Props> = ({ text, onClick, style, disabled }) => {
  return (
    <button disabled={disabled} onClick={onClick} type='button' className={`${style} ${styles.button}`}>
      {text}
    </button>
  );
};
