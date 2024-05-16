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

export type PageFeatures = PageFeature[];
