"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NavListData_1 = __importDefault(require("./data/NavListData"));
const react_1 = __importDefault(require("react"));
function NavListItem() {
    return (react_1.default.createElement("ul", { className: "nav__list grid" }, NavListData_1.default.map(({ id, itemName, icon: Icon, navLink }) => {
        return (react_1.default.createElement("li", { key: id, className: "nav__item" },
            react_1.default.createElement("a", { href: navLink, className: "nav__link" },
                react_1.default.createElement("div", { className: "nav__icon" },
                    react_1.default.createElement(Icon, null)),
                itemName)));
    })));
}
exports.default = NavListItem;
