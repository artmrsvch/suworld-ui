import htmlToDraft from 'html-to-draftjs';
import { ContentState, EditorState } from 'draft-js';

export const wysiwygInitialState = (html?: string) => {
  if (html) {
    const initialValue = htmlToDraft(html);
    const contentState = ContentState.createFromBlockArray(
      initialValue.contentBlocks
    );
    return EditorState.createWithContent(contentState);
  }
  return EditorState.createEmpty();
};
