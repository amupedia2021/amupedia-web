export const getBase64 = (file) => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
		reader.readAsDataURL(file);
	});
};

export const initializeState = (setData) => {
	setData({
		title: sessionStorage.getItem('title')
			? sessionStorage.getItem('title')
			: '',
		coverImg: sessionStorage.getItem('coverImg')
			? sessionStorage.getItem('coverImg')
			: '',
		content: sessionStorage.getItem('content')
			? sessionStorage.getItem('content')
			: '',
	});
};

export const dataChangeHandler = (e, data, setData) => {
	// console.log(data.title);
	if (e.target.name === 'title') {
		if (e.target.value.length > 70) {
			setData({ ...data, title: data.title });
			alert('Only 70 characters are allowed');
			return;
		}
		sessionStorage.setItem('title', e.target.value);
		setData({ ...data, title: e.target.value });
	} else if (e.target.name === 'coverImg') {
		const file = e.target.files[0];
		if (file == null || file == undefined) return;
		if (file) {
			console.log(file);
			if (file.size > 1048576) return alert('Image is greator than 1.5mb');
			getBase64(file).then((result) => {
				setData({ ...data, coverImg: result });
				sessionStorage.setItem('coverImg', result);
			});
		} else {
			setData({ ...data, coverImg: '', coverImgName: '' });
			sessionStorage.setItem('coverImg', '');
			sessionStorage.setItem('coverImgName', '');
		}
	}
};
