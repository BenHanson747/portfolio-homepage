import React from "react";
import Button from "./Button";

const MainText = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">Hi, I'm Ben Hanson</h1>
      <h3 className="home_substitle">React Developer.</h3>
      <p className="home__description">
        Frontend Developer, specialising in React and Typescript. If you are
        interested in my services and want to discuss further, please send me a
        message on LinkedIn.
      </p>
      <Button
        link={"https://www.linkedin.com/in/ben-hanson-87242937/"}
        text="Contact Me Now!"
      />
    </div>
  );
};

export default MainText;
