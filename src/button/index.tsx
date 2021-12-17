import AntdButton, {ButtonProps as AntButtonProps} from 'antd/lib/button/index';
import {FC} from "react";
import styled from 'styled-components';
import { Color } from '../ui';
import { md } from '../ui';

enum Palette {
  orange = 'orange',
  aquamarine = 'aquamarine',
}

type ChangedProps = { type: AntButtonProps['type']; color?: keyof typeof Palette };

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
  color?: keyof typeof Palette
};

const ButtonStyled = styled(AntdButton)<{ color?: keyof typeof Palette }>`
  &,
  &:hover,
  &:active,
  &:focus {
    background: ${pr =>
  isChangeAquamarineColor({ type: pr.type, color: pr.color })
    ? Color.aquamarine
    : isChangeOrangeColor({ type: pr.type, color: pr.color })
    ? Color.orange
    : undefined};
    border-color: ${pr =>
  pr.color && pr.type !== 'link' && pr.type !== 'text'
    ? `${Color[pr.color]}`
    : undefined};
    color: ${pr =>
  pr.color && pr.type !== 'primary' ? `${Color[pr.color]}` : undefined};
  }
  border-radius: 20px;
  font-weight: 600;
  font-size: 14px;
  padding: 4px 20px !important;
  line-height: 12px;
  height: 30px;
  border-width: 2px;

  @media screen and (max-width: ${md}) {
    border-radius: 15px;
    padding: 0.1px 20px 0 20px !important;
    line-height: 28px !important;
  }
  &.ant-btn[disabled],
  .ant-btn[disabled]:hover,
  .ant-btn[disabled]:focus,
  .ant-btn[disabled]:active {
    border-color: ${Color.silver};
  }
`;

export const Button = ButtonStyled as FC<ButtonProps>
