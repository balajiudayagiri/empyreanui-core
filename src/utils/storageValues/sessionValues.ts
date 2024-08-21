export const setSessionValue = <T>(key: string, value: T): void => {
  if (
    typeof window !== "undefined" &&
    typeof window.sessionStorage !== "undefined"
  ) {
    const storeValue = btoa(JSON.stringify(value));
    const data = sessionStorage.setItem(key, storeValue);
  }
};

export const getSessionValue = <T>(key: string): T | null => {
  if (typeof window !== "undefined") {
    const value = sessionStorage.getItem(key);
    if (value) {
      const storedValue = atob(value);
      try {
        return JSON.parse(storedValue) as T;
      } catch (error) {
        return storedValue as T;
      }
    }
  }
  return null;
};

export const removeSessionValue = (key: string) => {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem(key);
  }
};
