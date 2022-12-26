import { useState } from 'react';
import AmupediaEditor from './Editor/Editor';

import {
  Sidebar,
  Main,
  Wrapper,
  BlogTitle,
  BlogContent,
  TitlePlaceholder,
  TitleWrapper
} from './WriteBlogLayoutStyles';

const WriteBlogLayout = () => {
  const [heading, setHeading] = useState('');
  const [imageArray, setImageArray] = useState([]); // to keep track of uploaded image
  let [editorInstance, setEditorInstance] = useState({}); // to get the instance of editor.Js
  const [editorData, setData] = useState(null);

  function removeImage(img) {
    const array = imageArray.filter((image) => image !== img);
    setImageArray(array);
  }

  const handleInstance = (instance) => {
    setEditorInstance(instance);
  };

  return (
    <Wrapper>
      <Sidebar>Hello World</Sidebar>
      <Main>
        <TitleWrapper>
          <BlogTitle
            heading={heading}
            onChange={(e) => {
              setHeading(e.target.value);
            }}
            html={heading}
            tagName='h2'
          />
          <TitlePlaceholder heading={heading}>
            {heading == '' && "Enter your blog's title"}
          </TitlePlaceholder>
        </TitleWrapper>
        <BlogContent>
          <AmupediaEditor />
        </BlogContent>
      </Main>
    </Wrapper>
  );
};

export default WriteBlogLayout;
