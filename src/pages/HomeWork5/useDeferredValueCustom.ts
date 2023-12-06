import { useEffect, useState } from "react";

export const useDeferredValueCustom = (value: string, delay: number = 0) => {
  const [deferred, setDeferred] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDeferred(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [delay, value]);

  return deferred;
};
