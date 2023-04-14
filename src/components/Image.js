"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Image = ({ src, altText }) => {
    return react_1.default.createElement("img", { className: "item__image", src: src, alt: altText, width: "350", height: "200", loading: "lazy" });
};
exports.default = Image;
