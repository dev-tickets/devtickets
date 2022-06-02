import {
  AdminIcon,
  CalendarIcons,
  CommunityIcon,
  LogoutIcon,
  PlusIcon,
  SettingsIcon,
} from "@/components/Icons";
import { SubMenuItemType } from "./sharedTypes";

export const communitiesMenuLinks: Array<
  SubMenuItemType
> = [
  {
    title: "Comunidades",
    icon: CommunityIcon,
    description: "Conoce nuevas comunidades!",
    href: "/communities",
  },
  {
    title: "Eventos",
    icon: CalendarIcons,
    description: "Busca eventos, mantente al día en el mundo tech.",
    href: "/events",
  },
];

export const adminMenulinks: Array<
  SubMenuItemType
> = [
  {
    title: "Crear Evento",
    icon: PlusIcon,
    description: "Tu comunidad te está esperando. Crea un evento!",
    href: "/events/create",
  },
  {
    title: "Administrar comunidades",
    icon: AdminIcon,
    description:
      "Agrega tickets, actualiza los datos de tus comunidades y más.",
    href: "/communities/admin",
  },
];

export const superAdminMenulinks: Array<
  SubMenuItemType
> = [
  {
    title: "Crear comunidad",
    icon: PlusIcon,
    href: "/communities/create",
  },
];

export const settingsMenuLinks: Array<SubMenuItemType> = [
  {
    title: "Configuración",
    icon: SettingsIcon,
    href: "/settings",
  },
  "divider",
  {
    title: "Cerrar sesión",
    icon: LogoutIcon,
    href: "/logout",
  },
];
