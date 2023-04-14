"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function ClientCardText({ text, title }) {
    const listItems = text.map((items, index) => react_1.default.createElement("li", { key: index }, items));
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h4", null, title),
        react_1.default.createElement("ul", null, listItems)));
}
exports.default = ClientCardText;
