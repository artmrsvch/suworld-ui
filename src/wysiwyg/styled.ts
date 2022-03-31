import styled from 'styled-components';
import { Box } from '../box';
import { Color } from '../ui';

export const EditorWrapper = styled(Box)`
  display: block;

  .wrapper-class {
    border: 1px solid #9baabc;
    border-radius: 4px;
  }
  .editor-class {
    padding: 0 10px;
    border: none;
    border-top: 1px solid #9baabc;
    border-radius: 0 0 4px 4px;
    min-height: 100px;
  }
  .toolbar-class {
    border: none;
    border-radius: 4px 4px 0 0;
    background-color: #f0f7ff;
    margin-bottom: 0;
    padding: 6px 5px;
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;

export const DraftButton = styled.button<{ active?: boolean }>`
  border: 1px solid ${Color.lightGray};
  background-color: ${({ active }) =>
    active ? Color.fadeGray : Color.smoGrey};
  border-color: ${({ active }) => (active ? Color.sapphire : Color.lightGray)};
  line-height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;
  height: 25px;
  min-width: 30px;
  border-radius: 4px;
  gap: 2px;
`;
