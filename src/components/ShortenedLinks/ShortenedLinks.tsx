import { useEffect, useState } from 'react';
import { loginSelector } from 'src/store/loginSlice/loginSelectors';
import { useAppDispatch, useAppSelector } from 'src/store/store-hooks';
import { removeLinks } from 'src/store/urlSlice/UrlSlice';
import { urlsSelector } from 'src/store/urlSlice/urlSelector';
import { Button } from '../Button';
import './ShortenedLinks.scss';

export const ShortenedLinks = () => {
  const { urls } = useAppSelector(urlsSelector);
  const { isAuth } = useAppSelector(loginSelector);
  const dispatch = useAppDispatch();
  const [copiedlinks, setCopiedLinks] = useState<string[]>([]);

  const copyClipboardHandler = (url: string) => {
    navigator.clipboard.writeText(url).then(() => {
      setCopiedLinks([url]);
    });
  };

  useEffect(() => {
    if (!isAuth) {
      dispatch(removeLinks(true));
    }
  }, [isAuth]);

  return (
    <section className="shortenedLinks">
      <div className="container shortenedLinks__container">
        <div className="shortenedLinks__list">
          {urls.map((url) => (
            <div key={url.shortUrl} className="shortenedLinks__item">
              <span className="shortenedLinks__item-link">
                {url.originalUrl}
              </span>
              <span className="shortenedLinks__item-shortened">
                {url.shortUrl}
              </span>
              <Button
                onClick={() => copyClipboardHandler(url.shortUrl)}
                style={
                  copiedlinks.includes(url.shortUrl)
                    ? { background: '#3b3054' }
                    : undefined
                }
                variant="square"
                size="medium"
              >
                {copiedlinks.includes(url.shortUrl) ? 'Copied!' : 'Copy'}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
