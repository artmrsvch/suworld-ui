import styled from 'styled-components';
import { BoxProps } from './types';
import { Color } from '../ui';
import { calculateStyle, getResponsive } from './utils';

export const Box = styled.div<BoxProps>(({ responsive, ...rest }) => ({
  color: Color.strongBlue,
  display: 'flex',
  alignItems: 'center',
  ...calculateStyle(rest),
  ...getResponsive(responsive),
}));
