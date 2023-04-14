"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ItemCardPortfolio_1 = __importDefault(require("./ItemCardPortfolio"));
const react_1 = __importDefault(require("react"));
function Portfolio() {
    return (react_1.default.createElement("section", { className: "section", id: "portfolio" },
        react_1.default.createElement("h2", { className: "section__title" }, "Portfolio"),
        react_1.default.createElement("span", { className: "section__subtitle" }, "My recent work"),
        react_1.default.createElement("div", { className: "flexbox-container" },
            react_1.default.createElement(ItemCardPortfolio_1.default, null))));
}
exports.default = Portfolio;
