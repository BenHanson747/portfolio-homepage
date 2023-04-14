"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NavListData_1 = __importDefault(require("./data/NavListData"));
const react_1 = __importDefault(require("react"));
const FooterListItem = () => (react_1.default.createElement("ul", { className: "footer__links grid" }, NavListData_1.default.map(({ id, itemName, navLink }) => (react_1.default.createElement("li", { key: id },
    react_1.default.createElement("a", { href: navLink, className: "footer__links" }, itemName))))));
exports.default = FooterListItem;
