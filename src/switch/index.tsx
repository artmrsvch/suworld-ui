import styled from 'styled-components';
import AntdSwitch, {SwitchProps as AntdSwitchProps} from 'antd/lib/switch/index';
import { Color } from '../ui';
import {FC} from "react";

const StyledSwitch = styled(AntdSwitch)`
  min-width: 40px;
  background-color: ${Color.white};
  border: 2px solid ${Color.lightGray};
  &:focus {
    box-shadow: none !important;
  }
  .ant-switch-handle {
    width: 14px;
    height: 14px;
    &:before {
      background-color: ${Color.lightGray};
    }
  }
  &.ant-switch-checked {
    background-color: ${Color.aquamarine};
    border: 2px solid ${Color.aquamarine};
    .ant-switch-handle {
      left: calc(100% - 16px);
      &:before {
        background-color: ${Color.white}!important;
      }
    }
  }
`;

export const Switch = StyledSwitch as FC<AntdSwitchProps>
