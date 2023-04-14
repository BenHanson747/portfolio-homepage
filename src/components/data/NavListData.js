"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fa_1 = require("react-icons/fa");
const ai_1 = require("react-icons/ai");
const NavListData = [
    { id: 1, itemName: "Home", icon: fa_1.FaHome, navLink: "#home" },
    {
        id: 2,
        itemName: "Portfolio",
        icon: ai_1.AiOutlineFundProjectionScreen,
        navLink: "#portfolio",
    },
    { id: 3, itemName: "Clients", icon: fa_1.FaBriefcase, navLink: "#clients" },
];
exports.default = NavListData;
