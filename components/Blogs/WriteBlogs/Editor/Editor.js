import dynamic from 'next/dynamic';
import { Fragment, useState } from 'react';

let CustomEditor = dynamic(() => import('./EditorSetup'), {
  ssr: false
});

const AmupediaEditor = () => {
  const [imageArray, setImageArray] = useState([]); // to keep track of uploaded image
  let [editorInstance, setEditorInstance] = useState({}); // to get the instance of editor.Js
  const [editorData, setData] = useState(null);

  function removeImage(img) {
    const array = imageArray.filter((image) => image !== img);
    setImageArray(array);
  }

  const handleInstance = (instance) => {
    console.log(instance);
    setEditorInstance(instance);
  };

  return (
    <Fragment>
      {
        <CustomEditor
          handleInstance={handleInstance}
          imageArray={imageArray}
          data={editorData}
        />
      }
    </Fragment>
  );
};

export default AmupediaEditor;
