import React from 'react';
import { WysiwygDraftProps } from '../../types';
import { Box } from '../../../box';
import { textAlignment } from '../../constants';
import { DraftButton } from '../../styled';

export const TextAlignmentPanel: React.FC<WysiwygDraftProps> = ({
  onChange,
  currentState,
}) => (
  <Box gap={3}>
    {textAlignment.map(component => (
      <DraftButton
        key={component.name}
        type="button"
        onClick={() => onChange(component.name)}
        active={currentState?.textAlignment === component.name}
      >
        {component.icon}
      </DraftButton>
    ))}
  </Box>
);
