import "./darkMode.css"
import useLocalStorage from "../useLocalStorage.jsx";

function DarkMode() {
    const[theme, setTheme] = useLocalStorage("theme", "light");

    const handleSwitch = () => {
        if (theme === "light") {
            setTheme("dark");
            document.body.setAttribute("data-theme", "dark");
        } else {
            setTheme("light");
            document.body.setAttribute("data-theme", "light");
        }
    }
    return (
        <div className="dark-mode">
            <p>Switch to dark mode</p>
            <label className="switch">
                <input
                    type="checkbox"
                    onChange={handleSwitch}
                />
                <span className="slider"></span>
            </label>

        </div>
    )
}

export default DarkMode;