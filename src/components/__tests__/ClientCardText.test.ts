import React from "react";
import { render } from "@testing-library/react";
import ClientCardText, { ClientCardTextProps } from "../ClientCardText";

describe("ClientCardText", () => {
  const testProps: ClientCardTextProps = {
    title: "Responsibilities",
    text: ["Responsibility 1", "Responsibility 2", "Responsibility 3"],
  };

  it("renders the title correctly", () => {
    const { getByText } = render(<ClientCardText title={testProps.title} />);
    const titleElement = getByText(testProps.title);
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the list items correctly", () => {
    const { getByText } = render(<ClientCardText {...testProps} />);
    testProps.text.forEach((item) => {
      const itemElement = getByText(item);
      expect(itemElement).toBeInTheDocument();
    });
  });
});
