import { FiLinkedin, FiGithub } from "react-icons/fi";

function SocialLinks() {
  return (
    <div className="home__social">
      <a
        target="_blank"
        className="home__social-icon"
        rel="noreferrer"
        href="https://www.linkedin.com/in/ben-hanson-87242937/"
      >
        <FiLinkedin />
      </a>

      <a
        href="https://github.com/BenHanson747"
        target="_blank"
        className="home__social-icon"
        rel="noreferrer"
      >
        <FiGithub />
      </a>
    </div>
  );
}

export default SocialLinks;
