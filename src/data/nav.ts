import { INavItem } from '../models/app';
import { v4 as uid } from 'uuid';

export const navItems: INavItem[] = [
  {
    id: uid(),
    name: 'Products',
    link: '/products',
    content: [
      {
        id: uid(),
        name: 'Consumer',
        link: '/consumer',
      },
      {
        id: uid(),
        name: 'Professional',
        link: '/professional',
      },
      {
        id: uid(),
        name: 'Enterprise',
        link: '/enterprise',
      },
    ],
  },
  {
    id: uid(),
    name: 'Services',
    link: '/services',
    content: [
      {
        id: uid(),
        name: 'Services',
        link: '/services',
        subContent: [
          {
            id: uid(),
            name: 'Drone Repairs',
            link: '/services/drone-repairs',
          },
          {
            id: uid(),
            name: 'Drone Maintenance',
            link: '/services/drone-maintenance',
          },
          {
            id: uid(),
            name: 'Drone Software',
            link: '#',
          },
          {
            id: uid(),
            name: 'Drone Consulting',
            link: '/services/drone-consulting',
          },
          {
            id: uid(),
            name: 'Drone Detection',
            link: '/services/drone-detection',
          },
          {
            id: uid(),
            name: 'Drone Rentals',
            link: '/services/drone-rentals',
          },
          {
            id: uid(),
            name: 'Drone Research',
            link: '/services/drone-applied-research',
          },
          {
            id: uid(),
            name: 'Drone Education',
            link: '/services/drone-education',
          },
          {
            id: uid(),
            name: 'Custom Solutions',
            link: '/services/custom-solutions',
          },
        ],
      },
      {
        id: uid(),
        name: 'Software Solutions',
        link: '#',
        subContent: [
          {
            id: uid(),
            name: 'DJI Terra',
            link: '#',
          },
          {
            id: uid(),
            name: 'DJI Flighthub',
            link: '#',
          },
          {
            id: uid(),
            name: 'DJI Flight Simulator',
            link: '#',
          },
          {
            id: uid(),
            name: 'Ground Station Pro',
            link: '#',
          },
        ],
      },
      {
        id: uid(),
        name: 'Industrial Solutions',
        link: '/industries',
        subContent: [
          {
            id: uid(),
            name: 'Agriculture',
            link: '/industries/agriculture',
          },
          {
            id: uid(),
            name: 'Construction',
            link: '/industries/construction',
          },
          {
            id: uid(),
            name: 'Energy & Infrastructure',
            link: '/industries/energy',
          },
          {
            id: uid(),
            name: 'Forestry',
            link: '/industries/forestry',
          },
          {
            id: uid(),
            name: 'Media',
            link: '/industries/media',
          },
          {
            id: uid(),
            name: 'Mining',
            link: '/industries/mining',
          },
          {
            id: uid(),
            name: 'Public Safety',
            link: '/industries/public-safety',
          },
          {
            id: uid(),
            name: 'Security',
            link: '/industries/security',
          },
          {
            id: uid(),
            name: 'Surveying',
            link: '/industries/surveying',
          },
        ],
      },
    ],
  },
  {
    id: uid(),
    name: 'Deals',
    link: '/deals',
  },
  {
    id: uid(),
    name: 'Support',
    link: '/support',
  },
  {
    id: uid(),
    name: 'About us',
    link: '/about',
    content: [
      {
        id: uid(),
        name: 'Who we are',
        link: '/about',
      },
      {
        id: uid(),
        name: 'Our vision',
        link: '/about',
      },
      {
        id: uid(),
        name: 'Careers at Dronehub',
        link: '/about',
      },
    ],
  },
];
