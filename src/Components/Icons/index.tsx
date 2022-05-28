import { Icon } from "@chakra-ui/react";
import {
  RiArrowLeftLine,
  RiCalendarEventFill,
  RiFacebookBoxLine,
  RiGithubFill,
  RiHome2Fill,
  RiHomeHeartLine,
  RiInformationLine,
  RiMagicLine,
  RiMailAddLine,
  RiMenuLine,
  RiSearchLine,
  RiSettings3Line,
  RiTicket2Line,
  RiTwitterLine,
  RiUser2Fill,
} from "react-icons/ri";

import { AiFillPlusCircle } from "react-icons/ai";

// Extracted from https://react-icons.github.io/react-icons/icons?name=ri

export const MailIcon = () => {
  return <Icon as={RiMailAddLine} />;
};
export const TwitterIcon = () => {
  return <Icon as={RiTwitterLine} />;
};

export const FacebookIcon = () => {
  return <Icon as={RiFacebookBoxLine} />;
};

export const ArrowLeftIcon = () => {
  return <Icon as={RiArrowLeftLine} />;
};

export const InformationIcon = () => {
  return <Icon as={RiInformationLine} />;
};

export const CalendarIcons = () => {
  return <Icon as={RiCalendarEventFill} />;
};

export const HomeHeartIcon = () => {
  return <Icon as={RiHomeHeartLine} />;
};

export const HomeIcon = () => {
  return <Icon as={RiHome2Fill} />;
};

export const GithubIcon = () => {
  return <Icon as={RiGithubFill} />;
};

export const MagicWandIcon = () => {
  return <Icon as={RiMagicLine} />;
};

export const UserIcon = () => {
  return <Icon as={RiUser2Fill} />;
};

export const PlusIcon = () => {
  return <Icon as={AiFillPlusCircle} />;
};

export const HamburgerMenuIcon = () => {
  return <Icon as={RiMenuLine} />;
};

export const SearchIcon = () => {
  return <Icon as={RiSearchLine} />;
};

export const SettingsIcon = () => {
  return <Icon as={RiSettings3Line} />;
};

export const TicketIcon = () => {
  return <Icon as={RiTicket2Line} />;
};
