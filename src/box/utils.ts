import { Breakpoints, styledObject } from './constant';
import { BreakpointsFlat, Responsive } from './types';

export const getMediaScreen = (size: BreakpointsFlat) =>
  `@media screen and (max-width: ${Breakpoints[size]})`;

export const getResponsive = (responsive?: Responsive) => {
  if (!responsive) return {};
  const keys = Object.keys(responsive);

  return keys.reduce(
    (acc, item) => ({
      ...acc,
      [getMediaScreen(item as BreakpointsFlat)]:
        responsive[item as BreakpointsFlat],
    }),
    {}
  );
};

export const calculateStyle = (props: any) =>
  Object.keys(props).reduce((acc, item) => {
    const property = styledObject[item];
    const value = props[item];
    if (property) {
      return typeof value === 'boolean'
        ? { ...acc, ...property }
        : { ...acc, ...property(value) };
    }
    return acc;
  }, {});
