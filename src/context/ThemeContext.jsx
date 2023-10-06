import { useState } from "react";
const { createContext } = require("react");
export const ThemeContext = createContext()
const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")

    let toggleTheme = () => {
        setTheme(theme => theme === "light" ? "dark" : "light")
        localStorage.setItem("theme", theme === "light" ? "dark" : "light")
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;