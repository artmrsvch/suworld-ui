import { AlignItems, JustifyContent } from './types';
import { customXl, lg, md, sm, xl, xs, xxl } from '../ui';

export const styledObject: any = {
  column: { flexDirection: 'column' },
  wrap: { flexWrap: 'wrap' },
  width: (size: string) => ({ width: size }),
  height: (size: string) => ({ height: size }),
  align: (align: AlignItems) => ({ alignItems: align }),
  justify: (justify: JustifyContent) => ({ justifyContent: justify }),
  gap: (gap: number) => ({ gap: `${gap}px` }),
  padding: (value: string) => ({ padding: value }),
  margin: (value: string) => ({ margin: value }),
  border: (param: string) => ({ padding: param }),
  mt: (px: string) => ({ marginTop: `${px}px` }),
  borderRadius: (size: string | number) => ({ borderRadius: size }),
  bgColor: (color: string) => ({ backgroundColor: color }),
  mb: (px: string) => ({ marginBottom: `${px}px` }),
  ml: (px: string) => ({ marginLeft: `${px}px` }),
  mr: (px: string) => ({ marginRight: `${px}px` }),
  pt: (px: string) => ({ paddingTop: `${px}px` }),
  pb: (px: string) => ({ paddingBottom: `${px}px` }),
  pl: (px: string) => ({ paddingLeft: `${px}px` }),
  pr: (px: string) => ({ paddingRight: `${px}px` }),
};

export const Breakpoints = {
  xs,
  sm,
  md,
  lg,
  xl,
  customXl,
  xxl,
};
