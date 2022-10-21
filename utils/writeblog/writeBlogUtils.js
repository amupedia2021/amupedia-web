export const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};

export const initializeState = (setData) => {
  const savedTitle = sessionStorage.getItem("title");
  const savedContent = sessionStorage.getItem("content");

  setData({
    title:
      savedTitle == null || savedTitle === "undefined" || savedTitle === "null"
        ? ""
        : savedTitle,
    coverImg: sessionStorage.getItem("coverImg")
      ? sessionStorage.getItem("coverImg")
      : "",
    content:
      savedContent === "undefined" || savedContent === "null"
        ? ""
        : savedContent,
  });
};

export const dataChangeHandler = (e, data, setData, dispatch) => {
  if (e.target.name === "title") {
    if (e.target.value.length > 70) {
      setData({ ...data, title: data.title });
      dispatch({
        type: {
          task: "setAlert",
          alert: { type: "error", message: "Only 70 characters are allowed" },
        },
      });
      return;
    }
    sessionStorage.setItem("title", e.target.value);
    setData({ ...data, title: e.target.value });
  } else if (e.target.name === "coverImg") {
    const file = e.target.files[0];
    e.target.value = null;
    if (file == null || file == undefined) return;
    if (file) {
      if (file.size > 1048576) {
        dispatch({
          type: {
            task: "setAlert",
            alert: {
              type: "error",
              message: "Image size should be less than 1.5 MB",
            },
          },
        });
        return;
      }
      getBase64(file).then((result) => {
        setData({ ...data, coverImg: result });
        sessionStorage.setItem("coverImg", result);
      });
    } else {
      setData({ ...data, coverImg: "", coverImgName: "" });
      sessionStorage.setItem("coverImg", "");
      sessionStorage.setItem("coverImgName", "");
    }
  }
};
