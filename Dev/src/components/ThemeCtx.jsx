import { createContext, useContext, useState } from "react";

const ThemeCtx = createContext({
  theme: "light",
  toggle: () => {},
});

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggle = () => {
    setTheme((prev) => (prev == "light" ? "dark" : "light"));
  };
  return (
    <ThemeCtx.Provider value={{ theme, toggle }}>{children}</ThemeCtx.Provider>
  );
}


export const ThemeCtxComp = () => {
    const {theme,toggle} = useContext(ThemeCtx)
  return (
    <div>
        <p>{theme}</p>
        <button onClick={toggle}>Togggle</button>
    </div>
  )
}

