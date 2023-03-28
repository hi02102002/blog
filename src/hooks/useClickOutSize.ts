import { RefObject, useEffect } from 'react';

type Handler = (event: MouseEvent) => void;

function useClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler,
  mouseEvent: 'mousedown' | 'mouseup' = 'mousedown'
): void {
  useEffect(() => {
    const el = ref?.current;

    const handelClick = (e: MouseEvent) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!el || el.contains(e.target as Node)) {
        return;
      }

      handler(e);
    };

    window.addEventListener(mouseEvent, handelClick);
  }, [mouseEvent, handler, ref]);
}

export default useClickOutside;
