import { RefObject, useState } from "react";

export const useRefCustom = <T>(el: T | null): RefObject<T> => {
  const [state] = useState(() => ({ current: el }));

  return state;
};
