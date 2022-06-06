import {
  AlignCenterOutlined,
  AlignLeftOutlined,
  AlignRightOutlined,
  BoldOutlined,
  ItalicOutlined,
  OrderedListOutlined,
  StrikethroughOutlined,
  UnderlineOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import React from 'react';
import { EnumInlineStyle } from './types';

export const WYSIWYG_DEBOUNCE_TIMEOUT = 400;

export const listWysiwyg = [
  {
    name: 'unordered',
    icon: <UnorderedListOutlined />,
  },
  {
    name: 'ordered',
    icon: <OrderedListOutlined />,
  },
];

export const inlineStyle = [
  {
    name: EnumInlineStyle.BOLD,
    icon: <BoldOutlined />,
  },
  {
    name: EnumInlineStyle.ITALIC,
    icon: <ItalicOutlined />,
  },
  {
    name: EnumInlineStyle.UNDERLINE,
    icon: <UnderlineOutlined />,
  },
  {
    name: EnumInlineStyle.STRIKETHROUGH,
    icon: <StrikethroughOutlined />,
  },
];

export const textAlignment = [
  {
    name: 'left',
    icon: <AlignLeftOutlined />,
  },
  {
    name: 'center',
    icon: <AlignCenterOutlined />,
  },
  {
    name: 'right',
    icon: <AlignRightOutlined />,
  },
];
