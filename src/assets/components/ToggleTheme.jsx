import { useContext, useEffect } from "react";
import { globalData } from "./Data";

const ToggleTheme = () => {
  const { theme, setTheme } = useContext(globalData);
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <button
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      stel het thema in op {theme === "light" ? "dark" : "light"}
    </button>
  );
};
export default ToggleTheme;
