import { ClientDataType } from "../types/types";

const ClientData: ClientDataType[] = [
  {
    id: 1,
    src: "./assets/BMI-logo.png",
    alt: "BMI Group logo",
    heading: "BMI Group",
    startDate: new Date("2022-09-26"),
    endDate: new Date(),
    responsibilities: ["Assiting senior developers in code creation", "Refactoring code and implementing new features"],
    technologies: ["GatsbyJS", "GitLab","React","SCSS","Typescript","Contentful CMS"],
    currentEmployer: true
  },

  {
    id: 2,
    src: "./assets/whittard.png",
    alt: "Whittard of Chelsea logo",
    heading: "Whittard of Chelsea",
    startDate: new Date("2021-10-25"),
    endDate: new Date("2022-09-23"),
    responsibilities: ["Technical implementation of marketing assets", "Core Web Vital improvment", "Implemented TailwindCSS"],
    technologies: ["HTML", "CSS3/TailwindCSS","Javascript","GitHub","Salesforce eCommerce Cloud"],
    currentEmployer: false
  },
];

export default ClientData;
