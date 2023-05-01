import React, { useState, useEffect } from "react";
import MaterialIcon from "react-google-material-icons";

function ColorTheme() {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    const titleText =
        theme === "light" ? "Switch to dark mode" : "Switch to light mode";

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <div className={`themeBtn ${theme}`}>
            <button onClick={toggleTheme}>
                <span className="tooltip">{titleText}</span>
                {theme === "light" ? (
                    <MaterialIcon icon="dark_mode" size={24} />
                ) : (
                    <MaterialIcon icon="light_mode" size={24} />
                )}
            </button>
        </div>
    );
}
export default ColorTheme;
