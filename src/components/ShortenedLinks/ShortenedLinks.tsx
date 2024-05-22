import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { loginSelector } from 'src/store/loginSlice/loginSelectors';
import { useAppDispatch, useAppSelector } from 'src/store/store-hooks';
import { removeLinks } from 'src/store/urlSlice/UrlSlice';
import { urlsSelector } from 'src/store/urlSlice/urlSelector';
import { Button } from '../Button';
import './ShortenedLinks.scss';

const cardAnimation = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const cardAnimationReversed = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

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
          {urls.map((url, index) => (
            <AnimatePresence key={url.shortUrl}>
              <motion.div
                className="shortenedLinks__item"
                initial={
                  (index + 1) % 2 === 0
                    ? cardAnimation.initial
                    : cardAnimationReversed.initial
                }
                animate={
                  (index + 1) % 2 === 0
                    ? cardAnimation.animate
                    : cardAnimationReversed.animate
                }
              >
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
              </motion.div>
            </AnimatePresence>
          ))}
        </div>
      </div>
    </section>
  );
};
