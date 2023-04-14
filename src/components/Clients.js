"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ItemCardClients_1 = __importDefault(require("./ItemCardClients"));
const react_1 = __importDefault(require("react"));
function Clients() {
    return (react_1.default.createElement("section", { className: "section", id: "clients" },
        react_1.default.createElement("h2", { className: "section__title" }, "Clients"),
        react_1.default.createElement("span", { className: "section__subtitle" }, "My experience"),
        react_1.default.createElement("div", { className: "flexbox-container" },
            react_1.default.createElement(ItemCardClients_1.default, null))));
}
exports.default = Clients;
