import { useCallback, useMemo, useState } from "react";
import { SortableTable } from "./SortableTable/SortableTable";
import { tableData } from "./_mocks";

export const HomeWork3 = () => {
  const [field, setField] = useState("id");
  const [isSortedUp, setIsSortedUp] = useState(true);

  const handleSortField = (key: string) => {
    key === field ? setIsSortedUp((prev) => !prev) : setField(key);
  };

  const sortFoo = useMemo(() => {
    return tableData.sort((a, b) =>
      a[field].toString().localeCompare(b[field].toString(), "en", {
        numeric: true,
      })
    );
  }, [field, isSortedUp]);

  const getSorted = useCallback(() => {
    return isSortedUp ? sortFoo : sortFoo.reverse();
  }, [sortFoo, isSortedUp]);

  return (
    <div>
      <SortableTable
        isSortedUp={isSortedUp}
        rows={getSorted()}
        onClick={handleSortField}
      />
    </div>
  );
};
