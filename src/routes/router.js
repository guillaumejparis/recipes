import { useEffect, useRef, useState, useCallback } from 'preact/hooks';

// https://github.com/molefrog/wouter/blob/master/use-location.js
const _useLocation = (hash) => {
  const [path, update] = useState(
    `${location.pathname}${hash ? location.hash : ''}`,
  );
  const prevPath = useRef(path);

  useEffect(() => {
    patchHistoryEvents();

    // this function checks if the location has been changed since the
    // last render and updates the state only when needed.
    // unfortunately, we can't rely on `path` value here, since it can be stale,
    // that's why we store the last pathname in a ref.
    const checkForUpdates = () => {
      return (
        prevPath.current !==
          `${location.pathname}${hash ? location.hash : ''}` &&
        update(
          (prevPath.current = `${location.pathname}${
            hash ? location.hash : ''
          }`),
        )
      );
    };

    const events = ['popstate', 'pushState', 'replaceState'];
    events.map((e) => addEventListener(e, checkForUpdates));

    // it's possible that an update has occurred between render and the effect handler,
    // so we run additional check on mount to catch these updates. Based on:
    // https://gist.github.com/bvaughn/e25397f70e8c65b0ae0d7c90b731b189

    checkForUpdates();

    return () => events.map((e) => removeEventListener(e, checkForUpdates));
  }, []);

  // the 2nd argument of the `useLocation` return value is a function
  // that allows to perform a navigation.
  //
  // the function reference should stay the same between re-renders, so that
  // it can be passed down as an element prop without any performance concerns.
  const navigate = useCallback((to, replace) => {
    history[replace ? 'replaceState' : 'pushState'](0, 0, to);
  }, []);

  return [path, navigate];
};

// While History API does have `popstate` event, the only
// proper way to listen to changes via `push/replaceState`
// is to monkey-patch these methods.
//
// See https://stackoverflow.com/a/4585031

let patched = 0;

const patchHistoryEvents = () => {
  if (patched) return;

  ['pushState', 'replaceState'].map((type) => {
    const original = history[type];

    history[type] = function () {
      const result = original.apply(this, arguments);
      const event = new Event(type);
      event.arguments = arguments;

      dispatchEvent(event);
      return result;
    };
  });

  return (patched = 1);
};

// hash & basepath location
const makeUseRecipesLocation = (basepath, hash = false) => () => {
  const [location, setLocation] = _useLocation(hash);

  let normalized = location;
  if (hash && location.startsWith(`${basepath}/#`)) {
    normalized = location.slice(`${basepath}/#`.length);
  } else if (location.startsWith(basepath)) {
    normalized = location.slice(basepath.length);
  }

  return [
    normalized,
    (to) => setLocation(hash ? `${basepath}/#${to}` : `${basepath}${to}`),
  ];
};

export { makeUseRecipesLocation };
