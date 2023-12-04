import { useCallback, useMemo, useState } from 'react';
import { SortableTable } from './SortableTable/SortableTable';
import { tableData } from './_mocks';

export const HomeWork3 = () => {
  const [field, setField] = useState('userId');
  const [isSortedUp, setIsSortedUp] = useState(false);

  const handleSortField = (key: string) => {
    if (key === field) {
      setIsSortedUp((prev) => !prev);
      return;
    }

    setField(key);
    setIsSortedUp(true);
  };

  const sortFoo = useMemo(() => {
    return tableData.sort((a, b) =>
      a[field].toString().localeCompare(b[field].toString(), undefined, {
        numeric: true,
      }),
    );
  }, [field, isSortedUp]);

  const getSorted = useCallback(() => {
    return isSortedUp ? sortFoo : sortFoo.reverse();
  }, [sortFoo, isSortedUp]);

  return (
    <div>
      <SortableTable
        field={field}
        isSortedUp={isSortedUp}
        rows={getSorted()}
        onClick={handleSortField}
      />
    </div>
  );
};
