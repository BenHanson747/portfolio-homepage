import { FaHome, FaBriefcase } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import type { IconType } from "react-icons";

export type NavListDataType = {
  id: number;
  itemName: string;
  icon: IconType;
  navLink: string;
};

const NavListData: NavListDataType[] = [
  { id: 1, itemName: "Home", icon: FaHome, navLink: "#home" },
  {
    id: 2,
    itemName: "Portfolio",
    icon: AiOutlineFundProjectionScreen,
    navLink: "#portfolio",
  },
  { id: 3, itemName: "Clients", icon: FaBriefcase, navLink: "#clients" },
];


export default NavListData;
