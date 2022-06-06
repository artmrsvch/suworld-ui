import React from 'react';
import { WysiwygDraftProps } from '../../types';
import { Dropdown, Menu } from 'antd';
import { DraftButton } from '../../styled';
import { DownOutlined } from '@ant-design/icons';

export const FontSizePanel: React.FC<WysiwygDraftProps> = ({
  onChange,
  currentState,
}) => {
  const fontSizeMenu = (
    <Menu onClick={({ key }) => onChange(key)}>
      <Menu.Item key="12">12</Menu.Item>
      <Menu.Item key="14">14</Menu.Item>
      <Menu.Item key="16">16</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={fontSizeMenu} trigger={['click']}>
      <DraftButton>
        <span>{currentState?.fontSize || 14}</span> <DownOutlined />
      </DraftButton>
    </Dropdown>
  );
};
