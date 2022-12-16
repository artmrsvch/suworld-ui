import React from 'react';
import { WysiwygDraftProps } from '../../types';
import { Box } from '../../../box';
import { Color } from '../../../ui';
import { inlineStyle } from '../../constants';
import { DraftButton } from '../../styled';

export const InlinePanel: React.FC<WysiwygDraftProps> = ({
  onChange,
  currentState,
}) => (
  <Box gap={3} style={{ fill: Color.strongBlue }}>
    {inlineStyle.map((component) => (
      <DraftButton
        key={component.name}
        type="button"
        onClick={() => onChange(component.name)}
        active={currentState[component.name]}
      >
        {component.icon}
      </DraftButton>
    ))}
  </Box>
);
