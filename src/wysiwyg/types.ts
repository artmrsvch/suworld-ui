import { BoxProps } from '../box/types';

export interface WysiwygDraftProps {
  onChange: (name: string | number) => void;
  currentState: {
    fontSize?: number;
    textAlignment?: string;
    listType?: string;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strikethrough?: boolean;
  };
}

export interface DraftWysiwygProps {
  value?: string;
  onChange?: (html?: string) => void;
  boxContainer?: BoxProps;
}

export enum EnumInlineStyle {
  BOLD = 'bold',
  ITALIC = 'italic',
  UNDERLINE = 'underline',
  STRIKETHROUGH = 'strikethrough',
}
