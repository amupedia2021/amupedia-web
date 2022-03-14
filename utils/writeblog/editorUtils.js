export const editorOptions = {
	buttonList: [
		['undo', 'redo'],
		['bold', 'underline', 'italic'],
		['fontColor', 'hiliteColor'],
		['align', 'list'],
		['outdent', 'indent'],

		['link', 'image'],
		['removeFormat'],
	],
};

export const handleImageUpload = (files, info, uploadHandler) => {
	const imgs = document.querySelectorAll('img');
	if (imgs.length > 6) {
		alert('Image Upload Limit Reached');
		uploadHandler();
		return;
	}
	if (files[0].size > 1048576) {
		alert('File is greator than 1mb');
		uploadHandler();
		return;
	}
	console.log(imgs);
	uploadHandler(files);
};
