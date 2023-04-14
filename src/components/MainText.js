"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function MainText() {
    return (react_1.default.createElement("div", { className: "home__data" },
        react_1.default.createElement("h1", { className: "home__title" }, "Hi, I'm Ben Hanson"),
        react_1.default.createElement("h3", { className: "home_substitle" }, "React Developer."),
        react_1.default.createElement("p", { className: "home__description" }, "Passionate and motivated React Developer with one years experience in industry. If you are interested in my services and want to discuss further, please send me a message on LinkedIn."),
        react_1.default.createElement("a", { href: "https://www.linkedin.com/in/ben-hanson-87242937/", className: "button button--flex", target: "_blank", rel: "noreferrer" }, "Contact Me Now!")));
}
exports.default = MainText;
