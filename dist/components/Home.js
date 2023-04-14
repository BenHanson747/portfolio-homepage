"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SocialLinks_1 = __importDefault(require("./SocialLinks"));
const HeroImage_1 = __importDefault(require("./HeroImage"));
const MainText_1 = __importDefault(require("./MainText"));
const react_1 = __importDefault(require("react"));
function Home() {
    return (react_1.default.createElement("main", { className: "main" },
        react_1.default.createElement("section", { className: "home section", id: "home" },
            react_1.default.createElement("div", { className: "home__container container grid" },
                react_1.default.createElement("div", { className: "home__content grid" },
                    react_1.default.createElement(SocialLinks_1.default, null),
                    react_1.default.createElement(HeroImage_1.default, null),
                    react_1.default.createElement(MainText_1.default, null))))));
}
exports.default = Home;
