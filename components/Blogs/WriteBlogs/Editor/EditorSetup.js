import { createReactEditorJS } from 'react-editor-js';
import CheckList from '@editorjs/checklist';
import CodeBox from '@bomdi/codebox';
import Delimiter from '@editorjs/delimiter';
import Embed from '@editorjs/embed';
import Image from '@editorjs/image';
import InlineCode from '@editorjs/inline-code';
import LinkTool from '@editorjs/link';
import List from '@editorjs/list';
import Quote from '@editorjs/quote';
import SimpleImage from '@editorjs/simple-image';
import Header from '@editorjs/header';
import styled from 'styled-components';
import React, { useRef, useState } from 'react';
import { isNil } from 'lodash';
const EditorJs = createReactEditorJS();

const EditorWrapper = styled.div`
  & .ce-block__content {
    margin: 0 0 0 4rem;
    width: 100%;
    right: 0;
    max-width: calc(100% - 4rem);
  }

  & .ce-toolbar {
    width: 70px;
  }
  & .ce-toolbar__content {
    left: 0;
    margin: 0;
    & .ce-toolbar__actions {
      position: relative;
      transform: translateY(4px);
      left: 0;
      right: auto;
    }
  }
`;

const EditorSetup = ({ data, imageArray, handleInstance }) => {
  const EDITOR_JS_TOOLS = {
    embed: Embed,
    header: Header,
    list: List,
    codeBox: CodeBox,
    linkTool: LinkTool,
    image: {
      class: Image,
      config: {
        uploader: {
          uploadByFile(file) {
            let formData = new FormData();
            formData.append('images', file);
            // send image to server
            return API.imageUpload(formData).then((res) => {
              // get the uploaded image path, pushing image path to image array
              imageArray.push(res.data.data);
              return {
                success: 1,
                file: {
                  url: res.data.data
                }
              };
            });
          }
        }
      }
    },
    quote: Quote,
    checklist: CheckList,
    delimiter: Delimiter,
    inlineCode: InlineCode,
    simpleImage: SimpleImage
  };

  const editorCore = useRef(null);

  const [value, setValue] = useState({});
  const handleChange = async () => {
    const savedData =
      await editorCore.current.dangerouslyLowLevelInstance?.save();
    console.log(savedData);
  };

  const handleInitialize = React.useCallback((instance) => {
    editorCore.current = instance;
  }, []);

  return (
    <EditorWrapper>
      <EditorJs
        defaultValue={data}
        onInitialise={handleInitialize}
        tools={EDITOR_JS_TOOLS}
        // value={value}
        onChange={(api, event) => {
          handleChange();
        }}
        placeholder={`Write from here...`}
      />
    </EditorWrapper>
  );
};
export default EditorSetup;
