import { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const value = {
    theme,
    toggleTheme,
  }

  useEffect(() => {
    if(localStorage.getItem("theme") === "dark") { document.body.classList.add("body-dark")}
  }, [])

  useEffect(() => {
      if(theme === "light") { document.body.classList.remove("body-dark") }
      else { document.body.classList.add("body-dark") }
      localStorage.setItem("theme", theme)
  },[theme])

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
}