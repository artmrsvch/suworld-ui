import React from 'react';
import { WysiwygDraftProps } from '../../types';
import { DraftButton } from '../../styled';
import { ClearOutlined } from '@ant-design/icons';

export const ClearPanel: React.FC<WysiwygDraftProps> = ({ onChange }) => (
  <DraftButton type="button" onClick={() => onChange('')}>
    <ClearOutlined />
  </DraftButton>
);
