import { GenericIconComponentType } from "@/components/Icons";

export type SubMenuItemsLinksType =
  | {
    title: string;
    icon: GenericIconComponentType;
    description?: string;
    href: string;
    onClick?: never;
  }
  | {
    title: string;
    icon: GenericIconComponentType;
    description?: string;
    href?: never;
    onClick: () => void;
  };

export type SubMenuItemType =
  | SubMenuItemsLinksType
  | "divider"
  | (() => React.ReactNode);
