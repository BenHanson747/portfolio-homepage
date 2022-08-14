function MainText() {
  return (
    <div className="home__data">
      <h1 className="home__title">Hi, I'm Ben Hanson</h1>
      <h3 className="home_substitle">React Developer.</h3>
      <p className="home__description">
        Passionate and motivated React Developer with one years experience in
        industry. If you are interested in my services and want to discuss
        further, please send me a message on LinkedIn.
      </p>
      <a
        href="https://www.linkedin.com/in/ben-hanson-87242937/"
        className="button button--flex"
        target="_blank"
        rel="noreferrer"
      >
        Contact Me Now!
        <div className="button__icon"></div>
      </a>
    </div>
  );
}

export default MainText;
