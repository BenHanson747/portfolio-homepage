"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PortfolioData_1 = __importDefault(require("./data/PortfolioData"));
const Image_1 = __importDefault(require("./Image"));
const react_1 = __importDefault(require("react"));
function ItemCardPortfolio() {
    return (react_1.default.createElement(react_1.default.Fragment, null, PortfolioData_1.default.map(({ id, src, alt, linksource, heading, text }) => {
        return (react_1.default.createElement("div", { key: id, className: "flexbox__item" },
            react_1.default.createElement("a", { href: linksource, target: "_blank", rel: "noreferrer" },
                react_1.default.createElement(Image_1.default, { src: src, altText: alt })),
            react_1.default.createElement("div", { className: "item-text-box" },
                react_1.default.createElement("h3", null, heading),
                react_1.default.createElement("p", { className: "padding__bottom" }, text),
                react_1.default.createElement("a", { href: linksource, className: "button button--flex", target: "_blank", rel: "noreferrer" }, "View Project"))));
    })));
}
exports.default = ItemCardPortfolio;
