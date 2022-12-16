import React, { useCallback, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { convertToRaw, EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import debounce from 'lodash.debounce';
import { EditorWrapper } from './styled';
import { InlinePanel } from './components/InlinePanel/InlinePanel';
import { FontSizePanel } from './components/FontSizePanel/FontSizePanel';
import { ListPanel } from './components/ListPanel/ListPanel';
import { TextAlignmentPanel } from './components/TextAlignmentPanel/TextAlignmentPanel';
import { ClearPanel } from './components/ClearPanel/ClearPanel';
import { DraftWysiwygProps } from './types';
import { WYSIWYG_DEBOUNCE_TIMEOUT } from './constants';
import { wysiwygInitialState } from './utils/wysiwygInitialState';

export const TextEditor: React.FC<DraftWysiwygProps> = ({
  onChange,
  value,
  boxContainer,
}) => {
  const [editorState, setEditorState] = useState(wysiwygInitialState(value));

  const debounceSetHtml = useCallback(
    debounce((nextValue: string) => {
      const characterLenght = String(nextValue).replace(/<\/?[^>]+(>|$)/g, '')
        .length;
      if (characterLenght) {
        onChange && onChange(nextValue);
      } else {
        onChange && onChange(undefined);
      }
    }, WYSIWYG_DEBOUNCE_TIMEOUT),
    []
  );

  const onEditorStateChange = (editorStateEvent: EditorState) => {
    setEditorState(editorStateEvent);

    debounceSetHtml(
      draftToHtml(convertToRaw(editorStateEvent.getCurrentContent()))
    );
  };

  return (
    <EditorWrapper width="100%" {...boxContainer}>
      <Editor
        editorState={editorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          options: ['inline', 'fontSize', 'list', 'textAlign', 'remove'],
          inline: {
            component: InlinePanel,
          },
          fontSize: {
            component: FontSizePanel,
          },
          list: {
            component: ListPanel,
          },
          textAlign: {
            component: TextAlignmentPanel,
          },
          remove: { component: ClearPanel },
        }}
      />
    </EditorWrapper>
  );
};
