import { FC } from "react";
import { SortArrow } from "../SortArrow/SortArrow";
import { tableHeaderData } from "../_mocks";
import { RowType } from "../types";
import cls from "./styles.module.css";

interface SortableTableProps {
  rows: RowType[];
  onClick: (el: string) => void;
  isSortedUp: boolean;
}

export const SortableTable: FC<SortableTableProps> = ({
  rows,
  onClick,
  isSortedUp,
}) => {
  return (
    <table className={cls.table}>
      <thead className={cls.head}>
        <tr className={cls.headRow}>
          {tableHeaderData.map((el, index) => (
            <th className={cls.headRowElement} key={el + index}>
              {el}
              <SortArrow isSortedUp={isSortedUp} onClick={() => onClick(el)} />
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((el) => (
          <tr key={el.id}>
            <td>{el.userId}</td>
            <td>{el.id}</td>
            <td>{el.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
