import { FiMoon, FiSun } from "react-icons/fi";
import { useState, useEffect } from "react";

function NavTheme() {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
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
