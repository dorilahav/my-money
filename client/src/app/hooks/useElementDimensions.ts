import {useLayoutEffect, useMemo, useRef, useState} from 'react';

export const useElementDimensions = <TElement extends HTMLElement = HTMLDivElement>() => {
  const ref = useRef<TElement>(null);
  const [dimensions, setDimensions] = useState<{width: number; height: number}>();
  const resizeObserver = useMemo(
    () =>
      new ResizeObserver(entries => {
        const {width, height} = entries[0].contentRect;

        setDimensions({width, height});
      }),
    []
  );

  useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }

    const element = ref.current;

    resizeObserver.observe(element);

    return () => resizeObserver.unobserve(element);
  }, [ref.current]);

  return {ref, dimensions};
};
