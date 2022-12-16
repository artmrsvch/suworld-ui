import React from 'react';
import { WysiwygDraftProps } from '../../types';
import { Box } from '../../../box';
import { Color } from '../../../ui';
import { listWysiwyg } from '../../constants';
import { DraftButton } from '../../styled';

export const ListPanel: React.FC<WysiwygDraftProps> = ({
  onChange,
  currentState,
}) => (
  <Box gap={3} style={{ fill: Color.strongBlue }}>
    {listWysiwyg.map(component => (
      <DraftButton
        key={component.name}
        type="button"
        onClick={() => onChange(component.name)}
        active={currentState?.listType === component.name}
      >
        {component.icon}
      </DraftButton>
    ))}
  </Box>
);
