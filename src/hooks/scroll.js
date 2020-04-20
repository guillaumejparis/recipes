import { useEffect, useState } from 'preact/hooks';

const useScroll = () => {
  const [scrolledFromTop, setScrolledFromTop] = useState(false);

  const handleScroll = () => setScrolledFromTop(!!window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return [scrolledFromTop];
};

export { useScroll };
