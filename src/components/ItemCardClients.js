"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClientData_1 = __importDefault(require("./data/ClientData"));
const ClientCardText_1 = __importDefault(require("./ClientCardText"));
const react_1 = __importStar(require("react"));
const calculateTenureDates = (startDate, endDate) => {
    return `${startDate.toLocaleString("default", {
        month: "short",
    })} ${startDate.getFullYear()} - ${endDate.toLocaleString("default", {
        month: "short",
    })} ${endDate.getFullYear()}`;
};
const calculateTenureDifference = (startDate, endDate) => {
    const diff = endDate.getTime() - startDate.getTime();
    const diffInMonths = diff / (1000 * 60 * 60 * 24 * 30);
    const years = Math.floor(diffInMonths / 12);
    const months = Math.floor(diffInMonths % 12);
    const yearString = years === 1 ? "Year" : "Years";
    const monthString = months === 1 ? "Month" : "Months";
    return `${years} ${yearString} ${months} ${monthString}`;
};
const Image = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require("./Image"))));
const ClientCard = ({ id, src, alt, heading, startDate, endDate, responsibilities, technologies, }) => {
    return (react_1.default.createElement("div", { key: id, className: "flexbox__item" },
        react_1.default.createElement(react_1.Suspense, { fallback: react_1.default.createElement("div", null, "Loading...") },
            react_1.default.createElement(Image, { src: src, altText: alt })),
        react_1.default.createElement("div", { className: "item-text-box" },
            react_1.default.createElement("h3", null, heading),
            react_1.default.createElement("p", null, calculateTenureDates(startDate, endDate)),
            react_1.default.createElement("p", null, calculateTenureDifference(startDate, endDate)),
            react_1.default.createElement(ClientCardText_1.default, { text: responsibilities, title: "Responsibilities" }),
            react_1.default.createElement(ClientCardText_1.default, { text: technologies, title: "Technologies" }))));
};
const ItemCardClients = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null, ClientData_1.default.map((client) => (react_1.default.createElement(ClientCard, Object.assign({ key: client.id }, client))))));
};
exports.default = ItemCardClients;
