import { FC } from 'react';
import cls from './styles.module.css';

interface SortArrowProps {
  onClick: () => void;
  isSortedUp: boolean;
}
export const SortArrow: FC<SortArrowProps> = ({ onClick, isSortedUp }) => {
  return (
    <button type='button' className={cls.btn}>
      <div
        className={`${cls.arrow} ${isSortedUp && cls.up}`}
        onClick={onClick}
      />
    </button>
  );
};
