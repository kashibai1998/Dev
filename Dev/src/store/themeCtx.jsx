import { createContext, useState } from "react";

export const ThemeCtx = createContext({
  theme: "light",
  toggle: () => {},
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggle = () => {
    setTheme((t) => (t == "light" ? "dark" : "light"));
  };
  return (
    <ThemeCtx.Provider value={{ theme, toggle }}>{children}</ThemeCtx.Provider>
  );
};

export default ThemeProvider;
