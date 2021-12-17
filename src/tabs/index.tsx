import styled from 'styled-components';
import AntdTabs from 'antd/lib/tabs/index';
import { Color } from '../ui';

export const Tabs = styled(AntdTabs)`
  color: ${Color.strongBlue}!important;
  font-weight: 500;
  line-height: 1.14;
  overflow: visible;

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: ${Color.orange};
  }
  .ant-tabs-tab {
    &:hover {
      color: ${Color.orange};
    }
  }
  .ant-tabs-ink-bar {
    background: ${Color.orange};
  }
`;
