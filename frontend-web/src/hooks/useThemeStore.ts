import { useEffect } from "react";

const useThemeStore = (mode: boolean) => {
  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(mode));
  }, [mode]);
};

export default useThemeStore;
