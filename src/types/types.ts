import { FC, SVGProps } from 'react';

type FooterLink = {
  text: string;
  url: string;
};
export type FooterLinks = FooterLink[];

type FooterItem = {
  id: number;
  blockTitle: string;
  links: FooterLinks;
};

type FooterSocialItem = {
  id: number;
  imageUrl: FC<SVGProps<SVGSVGElement>>;
  url: string;
  alt: string;
};

export type MenuItems = { url: string; text: string }[];
export interface ShortUrlFormValues {
  url: string;
}

export type PageFeature = {
  id: number;
  title: string;
  body: string;
  icon: string;
};

export type FooterItems = FooterItem[];

export type FooterSocials = FooterSocialItem[];

export type PageFeatures = PageFeature[];

export type Url = {
  originalUrl: string;
  shortUrl: string;
};
