import {
  AdminIcon,
  ExploreIcon,
  HomeHeartIcon,
  PlusIcon,
} from "@/components/Icons";
import { SubMenuItem } from "./subMenu";

export const communitiesMenuLinks: Array<
  SubMenuItem
> = [
  {
    title: "Explora comunidades",
    icon: ExploreIcon,
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "/communities",
  },
  {
    title: "Mis comunidades",
    icon: HomeHeartIcon,
    description: "Speak directly to your customers in a more meaningful way.",
    href: "/my-communities",
  },
  {
    title: "Crea una comunidad!",
    icon: PlusIcon,
    description: "Your customers&#039; data will be safe and secure",
    href: "/my-communities",
  },
];

export const adminMenulinks: Array<
  SubMenuItem
> = [
  {
    title: "Crear comunidad",
    icon: PlusIcon,
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "/communities/create",
  },
  {
    title: "Crear Evento",
    icon: PlusIcon,
    description: "Speak directly to your customers in a more meaningful way.",
    href: "/events/create",
  },
  {
    title: "Administrar comunidades",
    icon: AdminIcon,
    description: "Agrega usuarios,",
    href: "/communities/admin",
  },
];
