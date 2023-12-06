import { useMemo, useState, useDeferredValue } from "react";
import { newArr } from "./constants";
import { useDeferredValueCustom } from "./useDeferredValueCustom";

const useSearchFoo = (searchStr: string) => {
  return useMemo(() => {
    return newArr.filter((el) => {
      return (
        searchStr.trim() !== "" && el.includes(searchStr.toLocaleLowerCase())
      );
    });
  }, [searchStr]);
};

const DELAY = 0;

export const HomeWork5 = () => {
  const [value, setValue] = useState("");

  //   оригинальный хук
  const deferredValue = useDeferredValue(value);

  //   ниже кастомный хук
  const deferredCustom = useDeferredValueCustom(value, DELAY);

  // это передача самого состояния
  //   const sortedArr = useSearchFoo(value);/

  // это передача переменной состояния обычного useDeferredValue
  //   const sortedArr = useSearchFoo(deferredValue);

  //   это передача переменной кастомного хука
  const sortedArr = useSearchFoo(deferredCustom);

  return (
    <div
      style={{
        margin: "48px auto 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "24px",
        maxWidth: "250px",
      }}
    >
      <input
        placeholder="Поиск"
        style={{ borderRadius: "8px", padding: "6px 10px", width: "100%" }}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <ul style={{ height: "600px", overflowY: "auto", width: "100%" }}>
        {sortedArr.map((el, index) => (
          <li key={el + index}>{el}</li>
        ))}
      </ul>
    </div>
  );
};
