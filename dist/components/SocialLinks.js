"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fi_1 = require("react-icons/fi");
const react_1 = __importDefault(require("react"));
function SocialLinks() {
    return (react_1.default.createElement("div", { className: "home__social" },
        react_1.default.createElement("a", { target: "_blank", className: "home__social-icon", rel: "noreferrer", href: "https://www.linkedin.com/in/ben-hanson-87242937/" },
            react_1.default.createElement(fi_1.FiLinkedin, null)),
        react_1.default.createElement("a", { href: "https://github.com/BenHanson747", target: "_blank", className: "home__social-icon", rel: "noreferrer" },
            react_1.default.createElement(fi_1.FiGithub, null))));
}
exports.default = SocialLinks;
