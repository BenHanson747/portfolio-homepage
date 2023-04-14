"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fi_1 = require("react-icons/fi");
const react_1 = require("react");
const react_2 = __importDefault(require("react"));
function NavTheme() {
    const [darkTheme, setDarkTheme] = (0, react_1.useState)(() => {
        const storedTheme = localStorage.getItem("darkTheme");
        return storedTheme ? JSON.parse(storedTheme) : false;
    });
    const toggleTheme = () => {
        const newTheme = !darkTheme;
        setDarkTheme(newTheme);
        localStorage.setItem("darkTheme", JSON.stringify(newTheme));
    };
    (0, react_1.useEffect)(() => {
        document.body.classList.toggle("dark-theme", darkTheme);
    }, [darkTheme]);
    return (react_2.default.createElement("div", { className: "change-theme", onClick: toggleTheme, "aria-label": darkTheme ? "Turn on light mode" : "Turn on dark mode" }, darkTheme ? react_2.default.createElement(fi_1.FiSun, null) : react_2.default.createElement(fi_1.FiMoon, null)));
}
exports.default = NavTheme;
