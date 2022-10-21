export const editorOptions = {
  buttonList: [
    ["undo", "redo"],
    ["bold", "underline", "italic"],
    ["fontColor", "hiliteColor", "blockquote"],
    ["align", "list"],
    ["outdent", "indent"],

    ["link", "image"],
    ["removeFormat"],
  ],
};

export const HandleImageUpload = (files, info, uploadHandler, dispatch) => {
  const imgs = document.querySelectorAll("img");
  if (imgs.length > 6) {
    dispatch({
      type: {
        task: "setAlert",
        alert: {
          type: "error",
          message: "Blogs can have a maximum of four images",
        },
      },
    });
    uploadHandler();
    return;
  }
  if (files[0].size > 1048576) {
    dispatch({
      type: {
        task: "setAlert",
        alert: {
          type: "error",
          message: "Image Size should be less than 1.5 MB",
        },
      },
    });
    uploadHandler();
    return;
  }
  console.log(imgs);
  uploadHandler(files);
};
