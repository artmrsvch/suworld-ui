import { Input } from '../input';
import styled from 'styled-components';
import { Color } from '../ui';

export const StyledTextArea = styled(Input.TextArea)`
  &&& {
    border: 1px solid ${Color.lightGray}
    resize: none;
    height: 80px;
    &:hover {
      border: 1px solid ${Color.strongBlue}
    }
  }
`;
