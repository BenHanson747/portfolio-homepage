import { FiLinkedin, FiGithub } from "react-icons/fi";
import React from "react";

export type SocialMediaDataProps = {
  id: number;
  url: string;
  icon: JSX.Element;
};

export const SocialMediaData: SocialMediaDataProps[] = [
  {
    id: 1,
    url: "https://www.linkedin.com/in/ben-hanson-87242937/",
    icon: <FiLinkedin />,
  },
  { id: 2, url: "https://github.com/BenHanson747", icon: <FiGithub /> },
];

export default SocialMediaData;
