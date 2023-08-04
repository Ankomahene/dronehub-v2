import { NavbarLarge } from "./NavbarLarge";
import { v4 as uid } from "uuid";
import { INavItem } from "../../models/app";
import { NavbarSmall } from "./NavbarSmall";
import { useMediaQuery } from "@chakra-ui/react";

const navItems: INavItem[] = [
  {
    id: uid(),
    name: "Products",
    link: "/products",
    content: [
      {
        id: uid(),
        name: "Consumer",
        link: "#",
      },
      {
        id: uid(),
        name: "Professional",
        link: "#",
      },
      {
        id: uid(),
        name: "Enterprise",
        link: "#",
      },
    ],
  },
  {
    id: uid(),
    name: "Services",
    link: "/services",
    content: [
      {
        id: uid(),
        name: "Services",
        link: "#",
        subContent: [
          {
            id: uid(),
            name: "Drone Repairs",
            link: "#",
          },
          {
            id: uid(),
            name: "Drone Maintenance",
            link: "#",
          },
          {
            id: uid(),
            name: "Drone Software",
            link: "#",
          },
          {
            id: uid(),
            name: "Drone Consulting",
            link: "#",
          },
          {
            id: uid(),
            name: "Drone Detection",
            link: "#",
          },
          {
            id: uid(),
            name: "Drone Rentals",
            link: "#",
          },
          {
            id: uid(),
            name: "Drone Research",
            link: "#",
          },
          {
            id: uid(),
            name: "Drone Education",
            link: "#",
          },
          {
            id: uid(),
            name: "Custom Solutions",
            link: "#",
          },
        ],
      },
      {
        id: uid(),
        name: "Software Solutions",
        link: "#",
        subContent: [
          {
            id: uid(),
            name: "DJI Terra",
            link: "#",
          },
          {
            id: uid(),
            name: "DJI Flighthub",
            link: "#",
          },
          {
            id: uid(),
            name: "DJI Flight Simulator",
            link: "#",
          },
          {
            id: uid(),
            name: "Ground Station Pro",
            link: "#",
          },
        ],
      },
      {
        id: uid(),
        name: "Industrial Solutions",
        link: "#",
        subContent: [
          {
            id: uid(),
            name: "Agriculture",
            link: "#",
          },
          {
            id: uid(),
            name: "Construction",
            link: "#",
          },
          {
            id: uid(),
            name: "Energy & Infrastructure",
            link: "#",
          },
          {
            id: uid(),
            name: "Forestry",
            link: "#",
          },
          {
            id: uid(),
            name: "Media",
            link: "#",
          },
          {
            id: uid(),
            name: "Mining",
            link: "#",
          },
          {
            id: uid(),
            name: "Public Safety",
            link: "#",
          },
          {
            id: uid(),
            name: "Security",
            link: "#",
          },
          {
            id: uid(),
            name: "Surveying",
            link: "#",
          },
        ],
      },
    ],
  },
  {
    id: uid(),
    name: "Deals",
    link: "/deals",
  },
  {
    id: uid(),
    name: "Support",
    link: "/support",
  },
  {
    id: uid(),
    name: "About us",
    link: "/about",
    content: [
      {
        id: uid(),
        name: "Who we are",
        link: "/about",
      },
      {
        id: uid(),
        name: "Our vision",
        link: "/about",
      },
      {
        id: uid(),
        name: "Careers at Dronehub",
        link: "/about",
      },
    ],
  },
];

export const Header = () => {
  const [isLarge] = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      {isLarge ? (
        <NavbarLarge navItems={navItems} />
      ) : (
        <NavbarSmall navItems={navItems} />
      )}
    </>
  );
};
