"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
describe("ClientCardText", () => {
    const testProps = {
        title: "Responsibilities",
        text: ["Responsibility 1", "Responsibility 2", "Responsibility 3"],
    };
    it("renders the title correctly", () => {
        const { getByText } = (0, react_1.render)(Object.assign({}, testProps) /  > );
        const titleElement = getByText(testProps.title);
        expect(titleElement).toBeInTheDocument();
    });
    it("renders the list items correctly", () => {
        const { getByText } = (0, react_1.render)(Object.assign({}, testProps) /  > );
        testProps.text.forEach((item) => {
            const itemElement = getByText(item);
            expect(itemElement).toBeInTheDocument();
        });
    });
});
