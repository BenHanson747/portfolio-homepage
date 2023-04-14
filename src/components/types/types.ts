import { IconType } from "react-icons";

export type ClientData = {
    id: number;
    src: string;
    alt: string;
    heading: string;
    startDate: Date;
    endDate: Date;
    responsibilities: string[];
    technologies: string[];
  };

  export type NavListData = {
    id: number;
    itemName: string;
    icon: IconType;
    navLink: string;
  };

  export type PortfolioData = {
    id: number;
    src: string;
    alt: string;
    linksource: string;
    heading: string;
    text: string;
  };

