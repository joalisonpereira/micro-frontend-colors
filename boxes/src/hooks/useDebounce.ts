import { useEffect, useState } from "react";

export default function useDebounce<T>(value: T, timeout: number) {
  const [newValue, setNewValue] = useState<T>(value);

  useEffect(() => {
    const fn = setTimeout(() => {
      setNewValue(value);
    }, timeout);

    return () => clearTimeout(fn);
  }, [value, timeout]);

  return newValue;
}
