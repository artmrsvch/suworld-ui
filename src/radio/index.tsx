import styled from 'styled-components';
import AntdRadio, { RadioProps } from 'antd/lib/radio/index';
import { Color, sm } from '../ui';
import { FC } from 'react';

const StyledRadio = styled(AntdRadio)`
  color: #333333;
  .ant-radio-checked .ant-radio-inner {
    border-color: ${Color.sapphire};
  }
  .ant-radio-inner {
    width: 18px;
    height: 18px;
    border-color: ${Color.lightGray};

    &:after {
      background-color: ${Color.sapphire};
      width: 9px;
      height: 9px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

export const Radio = StyledRadio as FC<RadioProps>;

export const RadioGroup = styled(AntdRadio.Group)`
  @media (max-width: ${sm}) {
    flex-wrap: wrap;
    width: 200px;
  }
  .ant-radio-inner {
    width: 20px;
    height: 20px;
    &:after {
      width: 12px;
      height: 12px;
      top: 3.2px;
      left: 2.9px;
    }
  }
`;

export const RadioButton = styled(AntdRadio.Button)`
  border-radius: 15px !important;
  color: ${Color.lightGray};
  border: 1px solid ${Color.lightGray}!important;
  &:not(:first-child) {
    margin-left: 12px;
  }
  &:before {
    content: none !important;
  }
  &.ant-radio-button-wrapper-checked {
    &:not(.ant-radio-button-wrapper-disabled) {
      background: ${Color.sapphire}!important;
      color: ${Color.white}!important;
      border: none;
    }
  }
  &.ant-radio-button-wrapper-disabled.ant-radio-button-wrapper-checked {
    background-color: ${Color.sapphire}!important;
  }
`;
