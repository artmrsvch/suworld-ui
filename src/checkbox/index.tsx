import {FC} from "react";
import styled from 'styled-components';
import AntdCheckbox, {CheckboxProps as AntdCheckboxProps } from 'antd/lib/checkbox/index';
import { Color } from '../ui';

const StyledCheckbox = styled(AntdCheckbox)`
  .ant-checkbox-checked .ant-checkbox-inner {
    border-color: ${Color.sapphire};
    background-color: ${Color.sapphire};
  }
  .ant-checkbox-inner {
    border-color: #e5e5e5;
    border-radius: 4px;
    width: 20px;
    height: 20px;
    &:after {
      width: 11px;
      height: 6px;
      top: 0;
      left: 42%;

      transform: scale(1) rotate(315deg) translateX(-50%);
      border: 2px solid ${Color.white};
      border-top: 0;
      border-right: 0;
    }
  }
`;

export const Checkbox = StyledCheckbox as FC<AntdCheckboxProps>
