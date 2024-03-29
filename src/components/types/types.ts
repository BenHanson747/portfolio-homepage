export type ClientDataType = {
    id: number;
    src: string;
    alt: string;
    heading: string;
    startDate: Date;
    endDate: Date;
    responsibilities: string[];
    technologies: string[];
    currentEmployer: boolean;
  };

  export type PortfolioDataType = {
    id: number;
    src: string;
    alt: string;
    projectLink: string;
    codeLink: string;
    heading: string;
    text: string;
  };
