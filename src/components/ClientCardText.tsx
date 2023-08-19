import React from "react";

export type ClientCardTextProps = {
  text: string[];
  title: "Responsibilities" | "Technologies";
}

const ClientCardText = ({ text, title }: ClientCardTextProps) => {
  const listItems = text.map((items, index) => <li key={index}>{items}</li>);
  return (
    <>
      <h4>{title}</h4>
      <ul>{listItems}</ul>
    </>
  );
}
export default ClientCardText;
