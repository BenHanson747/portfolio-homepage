"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NavMenu_1 = __importDefault(require("./components/NavMenu"));
const Home_1 = __importDefault(require("./components/Home"));
const Portfolio_1 = __importDefault(require("./components/Portfolio"));
const Clients_1 = __importDefault(require("./components/Clients"));
const Footer_1 = __importDefault(require("./components/Footer"));
const react_1 = __importDefault(require("react"));
function App() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(NavMenu_1.default, null),
        react_1.default.createElement(Home_1.default, null),
        react_1.default.createElement(Portfolio_1.default, null),
        react_1.default.createElement(Clients_1.default, null),
        react_1.default.createElement(Footer_1.default, null)));
}
exports.default = App;
