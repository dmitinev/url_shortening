import BrandRecognition from './assets/icon-brand-recognition.svg';
import DetailedRecord from './assets/icon-detailed-records.svg';
import Facebook from './assets/icon-facebook.svg';
import FullyCustomizable from './assets/icon-fully-customizable.svg';
import Instagram from './assets/icon-instagram.svg';
import Pinterest from './assets/icon-pinterest.svg';
import Twitter from './assets/icon-twitter.svg';
import {
  FooterItems,
  FooterSocials,
  MenuItems,
  PageFeatures,
} from './types/types';

export const API_URL = 'https://is.gd/create.php?format=simple&url=';

export const queries: string[] = ['(max-width: 766px)', '(min-width: 767px)'];

export const menuItems: MenuItems = [
  { url: '#', text: 'Features' },
  { url: '#', text: 'Prices' },
  { url: '#', text: 'Resources' },
];

export const pageFeatures: PageFeatures = [
  {
    id: 1,
    title: 'Brand Recognition',
    body: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
    icon: BrandRecognition,
  },
  {
    id: 2,
    title: 'Detailed Records',
    body: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
    icon: DetailedRecord,
  },
  {
    id: 3,
    title: 'Fully Customizable',
    body: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
    icon: FullyCustomizable,
  },
];

export const footerSocials: FooterSocials = [
  {
    id: 1,
    imageUrl: Facebook,
    url: '#',
    alt: 'facebook',
  },
  {
    id: 2,
    imageUrl: Twitter,
    url: '#',
    alt: 'twitter',
  },
  {
    id: 3,
    imageUrl: Pinterest,
    url: '#',
    alt: 'pinterest',
  },
  {
    id: 4,
    imageUrl: Instagram,
    url: '#',
    alt: 'instagram',
  },
];

export const footerBlockConfig: FooterItems = [
  {
    id: 1,
    blockTitle: 'Features',
    links: [
      {
        text: 'Link Shortening',
        url: '#',
      },
      {
        text: 'Branded Links',
        url: '#',
      },
      {
        text: 'Analitycs',
        url: '#',
      },
    ],
  },
  {
    id: 2,
    blockTitle: 'Resources',
    links: [
      {
        text: 'Blog',
        url: '#',
      },
      {
        text: 'Developers',
        url: '#',
      },
      {
        text: 'Support',
        url: '#',
      },
    ],
  },
  {
    id: 3,
    blockTitle: 'Company',
    links: [
      {
        text: 'About',
        url: '#',
      },
      {
        text: 'Our Team',
        url: '#',
      },
      {
        text: 'Careers',
        url: '#',
      },
      {
        text: 'Conact',
        url: '#',
      },
    ],
  },
];
