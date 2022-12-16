import AntdButton, {
  ButtonProps as AntButtonProps,
} from 'antd/lib/button/index';
import { FC } from 'react';
import styled from 'styled-components';
import { Color, xs, md } from '../ui';

enum Palette {
  orange = 'orange',
  aquamarine = 'aquamarine',
}

type ChangedProps = {
  type: AntButtonProps['type'];
  color?: keyof typeof Palette;
};

const isChangeAquamarineColor = (pr: ChangedProps) =>
  pr.type !== 'link' &&
  pr.type !== 'dashed' &&
  pr.type !== 'default' &&
  pr.type !== 'text' &&
  pr.color === 'aquamarine';
const isChangeOrangeColor = (pr: ChangedProps) =>
  pr.type !== 'link' &&
  pr.type !== 'dashed' &&
  pr.type !== 'default' &&
  pr.type !== 'text' &&
  pr.color === 'orange';

export type ButtonProps = AntButtonProps & {
  color?: keyof typeof Palette;
  isFullWidth?: boolean;
};

const ButtonStyled = styled(AntdButton)<{
  color?: keyof typeof Palette;
  isFullWidth?: boolean;
}>`
  &,
  &:hover,
  &:active,
  &:focus {
    background: ${(pr) =>
      pr.type === 'default'
        ? isChangeAquamarineColor({ type: pr.type, color: pr.color })
          ? Color.aquamarine
          : isChangeOrangeColor({ type: pr.type, color: pr.color })
          ? Color.orange
          : pr.color === undefined
          ? Color.sapphire
          : undefined
        : isChangeAquamarineColor({ type: pr.type, color: pr.color })
        ? Color.darkAquamarine
        : isChangeOrangeColor({ type: pr.type, color: pr.color })
        ? Color.darkOrange
        : pr.color === undefined
        ? '#063A7B'
        : undefined}
  ;
    border-color: ${(pr) =>
      pr.color && pr.type !== 'link' && pr.type !== 'text'
        ? `${Color[pr.color]}`
        : undefined};
    color: ${(pr) =>
      pr.color && pr.type !== 'primary' ? `${Color[pr.color]}` : Color.white};
    transition-property: background, color;
    transition-duration: 450ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  border-radius: 20px;
  font-weight: 600;
  font-size: 14px;
  padding: 4px 20px !important;
  line-height: 12px;
  height: 30px;
  border-width: 2px;
  color: ${(pr) =>
    pr.color && pr.type !== 'primary' ? Color.sapphire : Color.white};

  @media screen and (max-width: ${md}) {
    border-radius: 15px;
    padding: 0.1px 20px 0 20px !important;
    line-height: 1 !important;
  }
  @media screen and (max-width: ${xs}) {
    width: ${(pr) => (pr.isFullWidth ? '100%' : 'inherit')};
  }
  &.ant-btn[disabled],
  .ant-btn[disabled]:hover,
  .ant-btn[disabled]:focus,
  .ant-btn[disabled]:active {
    border-color: ${Color.silver};
  }
`;

export const Button = ButtonStyled as FC<ButtonProps>;
