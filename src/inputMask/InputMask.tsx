import React from 'react';
import InputMask, {
  BeforeMaskedStateChangeStates,
  InputState,
} from 'react-input-mask';
import { InputProps } from 'antd/lib/input';
import {Input} from "../input";

type AntInputMask = {
  mask: string | Array<string | RegExp>;
  maskPlaceholder?: string | null | undefined;
  alwaysShowMask?: boolean | undefined;
  beforeMaskedStateChange?(states: BeforeMaskedStateChangeStates): InputState;
} & InputProps;

export const AntInputMask: React.FC<AntInputMask> = props => {
  const {
    mask,
    maskPlaceholder,
    alwaysShowMask,
    beforeMaskedStateChange,
    children,
    ...inputProps
  } = props;
  const {
    prefixCls,
    size,
    type,
    onPressEnter,
    addonBefore,
    addonAfter,
    prefix,
    suffix,
    allowClear,
    bordered,
    htmlSize,
    ...controlProps
  } = inputProps;

  return (
    <InputMask
      mask={mask}
      maskPlaceholder={maskPlaceholder}
      alwaysShowMask={alwaysShowMask}
      beforeMaskedStateChange={beforeMaskedStateChange}
      {...controlProps}
    >
      <Input
        prefixCls={prefixCls}
        size={size}
        type={type}
        onPressEnter={onPressEnter}
        addonBefore={addonBefore}
        addonAfter={addonAfter}
        prefix={prefix}
        suffix={suffix}
        allowClear={allowClear}
        bordered={bordered}
        htmlSize={htmlSize}
      />
    </InputMask>
  );
};
