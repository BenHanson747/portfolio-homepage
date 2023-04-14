"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NavListItem_1 = __importDefault(require("./NavListItem"));
const NavTitle_1 = __importDefault(require("./NavTitle"));
const bi_1 = require("react-icons/bi");
const react_1 = require("react");
const cg_1 = require("react-icons/cg");
const NavTheme_1 = __importDefault(require("./NavTheme"));
const react_2 = __importDefault(require("react"));
function NavMenu() {
    const [showMenu, setShowMenu] = (0, react_1.useState)(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    return (react_2.default.createElement("header", { className: "header", id: "header" },
        react_2.default.createElement("nav", { className: "nav container" },
            react_2.default.createElement(NavTitle_1.default, null),
            react_2.default.createElement("div", { className: showMenu ? "nav__menu show-menu" : "nav__menu" },
                react_2.default.createElement(NavListItem_1.default, null),
                react_2.default.createElement("div", { className: "nav__close", onClick: toggleMenu },
                    react_2.default.createElement(cg_1.CgClose, null))),
            react_2.default.createElement("div", { className: "nav__btns" },
                react_2.default.createElement(NavTheme_1.default, null),
                react_2.default.createElement("div", { className: "nav__toggle", onClick: toggleMenu },
                    react_2.default.createElement(bi_1.BiGridAlt, null))))));
}
exports.default = NavMenu;
