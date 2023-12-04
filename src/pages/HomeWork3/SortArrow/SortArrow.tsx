import { FC } from "react";
import cls from "./sort-arrow.module.css";

interface SortArrowProps {
  onClick: () => void;
  isSortedUp: boolean;
}
export const SortArrow: FC<SortArrowProps> = ({ onClick, isSortedUp }) => {
  return (
    <button type="button" className={cls.btn}>
      <div
        className={cls.arrow}
        style={{ transform: !isSortedUp ? "rotate(0)" : "" }}
        onClick={onClick}
      ></div>
    </button>
  );
};
