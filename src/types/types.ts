type FooterLink = {
  text: string;
  url: string;
};
type FooterLinks = FooterLink[];

type FooterItem = {
  id: number;
  blockTitle: string;
  links: FooterLinks;
};

type FooterSocialItem = {
  id: number;
  imageUrl: string;
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
