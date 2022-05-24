import { Icon } from "@chakra-ui/react";
import {
  RiGithubFill,
  RiMagicFill,
  RiMagicLine,
  RiUser2Fill,
  RiMenuLine,
  RiSearchLine,
  RiSettings3Line,
  RiTicket2Line,
} from "react-icons/ri";

// Extracted from https://react-icons.github.io/react-icons/icons?name=ri

export const GithubIcon = () => {
  return <Icon as={RiGithubFill} />;
};

export const MagicWandIcon = () => {
  return <Icon as={RiMagicLine} />;
};

export const UserIcon = () => {
  return <Icon as={RiUser2Fill} />;
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
