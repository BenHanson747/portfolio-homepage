"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import image from "./assets/Ben_Hanson.png";
const react_1 = __importDefault(require("react"));
function HeroImage() {
    return (react_1.default.createElement("div", { className: "home__img" },
        react_1.default.createElement("svg", { className: "home__blob", viewBox: "0 0 200 187", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" },
            react_1.default.createElement("mask", { id: "mask0", "mask-type": "alpha" },
                react_1.default.createElement("path", { d: "M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 \n                        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 \n                        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 \n                        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" })),
            react_1.default.createElement("g", { mask: "url(#mask0)" },
                react_1.default.createElement("path", { d: "M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 \n                        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 \n                        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 \n                        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" }),
                react_1.default.createElement("image", { className: "home__blob-img", x: "12", y: "18", xlinkHref: "/assets/Ben_Hanson.png" })))));
}
exports.default = HeroImage;
