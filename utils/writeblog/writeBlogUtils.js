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
		coverImgName: sessionStorage.getItem('coverImgName')
			? sessionStorage.getItem('coverImgName')
			: '',
		content: sessionStorage.getItem('content')
			? sessionStorage.getItem('content')
			: '',
	});
};

export const dataChangeHandler = (e, data, setData) => {
	if (e.target.name === 'title') {
		sessionStorage.setItem('title', e.target.value);
		setData({ ...data, title: e.target.value });
	} else if (e.target.name === 'coverImg') {
		const file = e.target.files[0];
		if (file == null || file == undefined) return;
		if (file) {
			if (file.size > 1048576) return alert('Image is greator than 1.5mb');
			sessionStorage.setItem('coverImgName', file.name);
			getBase64(file).then((result) => {
				setData({ ...data, coverImgName: file.name, coverImg: result });
				sessionStorage.setItem('coverImg', result);
			});
		} else {
			setData({ ...data, coverImg: '', coverImgName: '' });
			sessionStorage.setItem('coverImg', '');
			sessionStorage.setItem('coverImgName', '');
		}
	}
};

export const autoResizeHeight = (e) => {
	e.target.style.height = 0;
	e.target.style.height = e.target.scrollHeight + 'px';
};
