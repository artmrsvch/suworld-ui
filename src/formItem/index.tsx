import styled from 'styled-components';
import { xs, Color } from '../ui';
import AntdFormItem from "antd/lib/form/FormItem";

export const FormItem = styled(AntdFormItem)<{
  isStandardSettings?: boolean;
  withoutMarginBottom?: boolean;
  form?: any;
}>`
  ${({ isStandardSettings }) => (isStandardSettings ? '' : 'display: block;')}

  ${({ withoutMarginBottom }) =>
  withoutMarginBottom
    ? 'margin-bottom: 0px;'
    : 'margin-bottom: 16px;'}

  .ant-form-item-label > label {
    font-weight: 500;
    font-size: 14px;
    color: ${Color.strongBlue};
    &:after {
      ${({ isStandardSettings }) =>
  isStandardSettings ? '' : 'content: none!important;'}
    }
  }

  .ant-form-item-required:before {
    font-size: 14px !important;
  }

  @media screen and (max-width: ${xs}) {
    .ant-form-item-label > label {
      font-size: 12px;
      ${({ isStandardSettings }) => isStandardSettings && 'font-size: 14px;'}
    }
    .ant-form-item-required:before {
      font-size: 12px !important;
    }
  }
`;
