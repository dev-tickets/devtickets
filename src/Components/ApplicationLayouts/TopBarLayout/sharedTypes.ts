import { GenericIconComponentType } from "@/components/Icons";

export type SubMenuItemsLinksType =
  | {
    title: string;
    icon: GenericIconComponentType;
    description?: string;
    href: string;
    onEveryClick?: () => void;
    onClick?: never;
  }
  | {
    title: string;
    icon: GenericIconComponentType;
    description?: string;
    href?: never;
    onEveryClick?: () => void;
    onClick: () => void;
  };

export type SubMenuItemType =
  | SubMenuItemsLinksType
  | "divider"
  | (() => React.ReactNode);
