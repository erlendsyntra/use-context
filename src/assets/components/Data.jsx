import { createContext, useState } from "react";

export const globalData = createContext();
const Data = ({ children }) => {
  const [taal, setTaal] = useState("nl");
  const [theme, setTheme] = useState("light");
  // dit {taal: taal, setTaal: setTaal, team: team, setTheme: setTheme} kan ook {taal, setTaal, theme, setTheme}
  return (
    <globalData.Provider
      value={{ taal: taal, setTaal: setTaal, theme: theme, setTheme: setTheme }}
    >
      {children}
    </globalData.Provider>
  );
};
export default Data;
