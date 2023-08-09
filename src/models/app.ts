import { ReactNode } from 'react';
import { IconType } from 'react-icons/lib';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

interface ISubContent {
  id: string;
  name: string;
  link: string;
}

interface IContent {
  id: string;
  name: string;
  link: string;
  subContent?: ISubContent[];
}
export interface IAccessory {
  id: string;
  name: string;
  description: string;
  image: SanityImageSource;
}
export interface IMenuItem {
  id: string;
  title: string;
  link: string;
  icon: ReactNode;
}
export interface INewsletterFormValues {
  name: string;
  email: string;
  industry: string;
}
export interface ICarouselItem {
  id: string;
  description: string;
  tagline: string;
  imageUrl: string;
  link: string;
  cta?: ReactNode;
}

export interface IProductOverview {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  outOfStock?: boolean;
  cta?: ReactNode;
}
export interface IDroneProperties {
  id: string;
  imageUrl: string;
  name: string;
  slug: string;
  type: string;
  series: DroneSeries;
  tagline: string;
  productType: string;
  outOfStock?: boolean;
  industry?: Industry[];
}

export interface ICameraProperties extends IDroneProperties {}
export interface IOtherProductsProperties
  extends Omit<IDroneProperties, 'tagline' | 'series'> {
  description: string;
}
export interface IProductSectionItem {
  name: string;
  displayName: string;
  products: IProductOverview[];
}
export interface IProductCategory {
  id: string;
  name: string;
  iconUrl: string;
}
export interface INavItem {
  id: string;
  name: string;
  link: string;
  content?: IContent[];
}
export interface IContactItem {
  id: string;
  heading: string;
  text: string;
  icon: IconType;
  link: string;
}
export interface IMainBannerData {
  heading: string;
  tagline: string;
  featuredProducts: IMainBannerFeaturedProducts[];
}
export interface IMainBannerFeaturedProducts {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  imageUrl: string;
}
export interface IDeal {
  id: string;
  name: string;
  description: string;
  salePrice: number;
  cutOutPrice: number;
  imageUrl: string;
}

export type Service =
  | 'repairs'
  | 'education'
  | 'consulting'
  | 'rental'
  | 'maintenance'
  | 'detection'
  | 'custom'
  | 'research';

export type IAllServices = {
  [key in Service]: IService;
};

export interface IService {
  title: string;
  link: string;
}

export type DroneSeries =
  | 'mavic-series'
  | 'phantom-series'
  | 'matrice-series'
  | 'agras-series'
  | 'dji-fpv-drone'
  | 'inspire-series';

export type CameraSeries =
  | 'zenmuse-series'
  | 'osmos-series'
  | 'ronin-series'
  | 'extra-payload';

export type Industry =
  | 'agricultural'
  | 'surveying'
  | 'media-entertainment'
  | 'mining'
  | 'public-safety'
  | 'forestry'
  | 'energy-infrastructure'
  | 'construction'
  | 'security';

export interface IProductsState {
  mavicSeries: IProductSectionItem[];
  phantomSeries: IProductSectionItem[];
  matriceSeries: IProductSectionItem[];
  inspireSeries: IProductSectionItem[];
  agrasSeries: IProductSectionItem[];
  djiFPVDrones: IProductSectionItem[];
  camerasAndGimbals: IProductSectionItem[];
  softwareAndOthers: IProductSectionItem[];
}

type FAQTarget = 'business' | 'consumers';
type FAQCategory =
  | 'drone-accessories'
  | 'drone-service'
  | 'Drone Service'
  | 'store'
  | 'other-issues';

export interface IFAQ {
  id: string;
  category: FAQCategory;
  target: FAQTarget;
  question: string;
  answer: string;
}
export interface IBlogOverview {
  id: string;
  title: string;
  slug: string;
  type: 'guide' | 'story';
}
export interface IBlogArticle extends IBlogOverview {
  tagline: string;
  duration: number;
  content: any;
  relatedStories: any[];
  _type: string;
}
