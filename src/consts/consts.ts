import { IAllServices } from '../models/app';

export const btnHeight = '46px';

export const services: IAllServices = {
  repairs: {
    title: 'Drone Repairs',
    link: '/services/drone-repairs',
  },
  consulting: {
    title: 'Drone Consulting',
    link: '/services/drone-consulting',
  },
  rental: {
    title: 'Drone Rentals',
    link: '/services/drone-rentals',
  },
  research: {
    title: 'Drone Applied Research',
    link: '/services/drone-applied-research',
  },
  education: {
    title: 'Drone Education',
    link: '/services/drone-education',
  },
};

export const policyItems = [
  {
    title: 'Overview',
    name: 'overview',
    link: '/policies',
    color: '#D600E8',
  },
  {
    title: 'Terms of Use',
    name: 'terms-of-use',
    link: '/policies/terms-of-use',
    color: '#D600E8',
  },
  {
    title: 'Privacy Policy',
    name: 'privacy-policy',
    link: '/policies/privacy-policy',
    color: '#0645A4',
  },
  {
    title: 'After Sales Policy',
    name: 'after-sales-policy',
    link: '/policies/after-sales-policy',
    color: '#011127',
  },
  {
    title: 'Warranty Policy',
    name: 'warranty-policy',
    link: '/policies/warranty-policy',
    color: '#FFAA00',
  },
];
