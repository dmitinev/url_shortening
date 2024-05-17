import { Url } from 'src/types/types';
import { useAppSelector } from '../store-hooks';
import { LoadingState } from './UrlSlice';
import { urlsSelector } from './urlSelector';

export const useUrls = (): { urls: Url[]; status: LoadingState } => {
  const { urls, status } = useAppSelector(urlsSelector);

  return { urls, status };
};

