import { Icon } from "@chakra-ui/react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import {
  RiAdminLine,
  RiArrowLeftLine,
  RiCalendarEventFill,
  RiCompass3Line,
  RiFacebookBoxLine,
  RiGithubFill,
  RiHome2Fill,
  RiHomeHeartLine,
  RiInformationLine,
  RiLogoutBoxLine,
  RiMagicLine,
  RiMailAddLine,
  RiMenuLine,
  RiSearchLine,
  RiSettings3Line,
  RiTicket2Line,
  RiTwitterLine,
  RiUser2Fill,
} from "react-icons/ri";

type CustomIconsProps = Omit<React.ComponentProps<typeof Icon>, "as">;

export type GenericIconComponentType = (props: CustomIconsProps) => JSX.Element;

// Extracted from https://react-icons.github.io/react-icons/icons?name=ri

export const VerticalThreeDotsIcon = (props: CustomIconsProps) => {
  return <Icon as={BiDotsVerticalRounded} {...props} />;
};
export const AdminIcon = (props: CustomIconsProps) => {
  return <Icon as={RiAdminLine} {...props} />;
};
export const ExploreIcon = (props: CustomIconsProps) => {
  return <Icon as={RiCompass3Line} {...props} />;
};
export const MailIcon = (props: CustomIconsProps) => {
  return <Icon as={RiMailAddLine} {...props} />;
};
export const TwitterIcon = (props: CustomIconsProps) => {
  return <Icon as={RiTwitterLine} {...props} />;
};

export const FacebookIcon = (props: CustomIconsProps) => {
  return <Icon as={RiFacebookBoxLine} {...props} />;
};

export const ArrowLeftIcon = (props: CustomIconsProps) => {
  return <Icon as={RiArrowLeftLine} {...props} />;
};

export const InformationIcon = (props: CustomIconsProps) => {
  return <Icon as={RiInformationLine} {...props} />;
};

export const CalendarIcons = (props: CustomIconsProps) => {
  return <Icon as={RiCalendarEventFill} {...props} />;
};

export const HomeHeartIcon = (props: CustomIconsProps) => {
  return <Icon as={RiHomeHeartLine} {...props} />;
};

export const HomeIcon = (props: CustomIconsProps) => {
  return <Icon as={RiHome2Fill} {...props} />;
};

export const GithubIcon = (props: CustomIconsProps) => {
  return <Icon as={RiGithubFill} {...props} />;
};

export const MagicWandIcon = (props: CustomIconsProps) => {
  return <Icon as={RiMagicLine} {...props} />;
};

export const UserIcon = (props: CustomIconsProps) => {
  return <Icon as={RiUser2Fill} {...props} />;
};

export const PlusIcon = (props: CustomIconsProps) => {
  return <Icon as={AiOutlinePlusCircle} {...props} />;
};

export const HamburgerMenuIcon = (props: CustomIconsProps) => {
  return <Icon as={RiMenuLine} {...props} />;
};

export const SearchIcon = (props: CustomIconsProps) => {
  return <Icon as={RiSearchLine} {...props} />;
};

export const SettingsIcon = (props: CustomIconsProps) => {
  return <Icon as={RiSettings3Line} {...props} />;
};

export const LogoutIcon = (props: CustomIconsProps) => {
  return <Icon as={RiLogoutBoxLine} {...props} />;
};

export const TicketIcon = (props: CustomIconsProps) => {
  return <Icon as={RiTicket2Line} {...props} />;
};
