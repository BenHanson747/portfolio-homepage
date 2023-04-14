import { FiMoon, FiSun } from "react-icons/fi";
import { useState, useEffect } from "react";

function NavTheme() {
  const [darkTheme, setDarkTheme] = useState(() =>JSON.parse(localStorage.getItem("darkTheme") || false));

  const toggleTheme = () => {
    const newTheme = !darkTheme;
    setDarkTheme(newTheme);
    localStorage.setItem("darkTheme", JSON.stringify(newTheme));
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", darkTheme);
  }, [darkTheme]);

  return (
    <div
      className="change-theme"
      onClick={toggleTheme}
      aria-label={darkTheme ? "Turn on light mode" : "Turn on dark mode"}
    >
      {darkTheme ? <FiSun /> : <FiMoon />}
    </div>
  );
}

export default NavTheme;
