import { useState } from "react";

const useLocalStorage = (key: string, initialValue: string) => {
  // 로컬 스토리지에서 초기 값을 가져오거나 기본값을 설정
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // 값을 로컬 스토리지에 저장
  const setValue = (value: string) => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
};

export default useLocalStorage;
