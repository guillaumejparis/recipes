import { useEffect, useState } from 'preact/hooks';

const useScrolledFromTop = (top = 0) => {
  const [scrolledFromTop, setScrolledFromTop] = useState(false);

  const handleScroll = () => setScrolledFromTop(window.scrollY > top);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return [scrolledFromTop];
};

export { useScrolledFromTop };
