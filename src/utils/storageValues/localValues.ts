export const setLocalValue = <T>(key: string, value: T): void => {
  if (
    typeof window !== "undefined" &&
    typeof window.localStorage !== "undefined"
  ) {
    const data = localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getLocalValue = <T>(key: string): T | null => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem(key);
    if (value) {
      try {
        return JSON.parse(value) as T;
      } catch (error) {
        return value as T;
      }
    }
  }
  return null;
};

export const removeLocalValue = (key: string) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};
