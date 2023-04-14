"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClientData_1 = __importDefault(require("./data/ClientData"));
const ClientCardText_1 = __importDefault(require("./ClientCardText"));
const Image_1 = __importDefault(require("./Image"));
const react_1 = __importDefault(require("react"));
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
const ClientCard = ({ id, src, alt, heading, startDate, endDate, responsibilities, technologies, }) => {
    return (react_1.default.createElement("div", { key: id, className: "flexbox__item" },
        react_1.default.createElement(Image_1.default, { src: src, altText: alt }),
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
