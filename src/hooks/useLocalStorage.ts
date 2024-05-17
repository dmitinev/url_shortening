import { Dispatch, useEffect, useState } from 'react';

export const useLocalStorage = (
  key: string,
  defaultValue: unknown,
): [value: unknown, Dispatch<unknown>] => {
  const [value, setValue] = useState<unknown>(getValue);

  function getValue(): unknown {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  }

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
