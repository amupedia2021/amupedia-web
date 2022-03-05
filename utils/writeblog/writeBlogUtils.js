export const disableQuillLink = () => {
	let set = false;
	setInterval(() => {
		const tooltip = document.querySelector('.ql-editing');
		if (tooltip) {
			if (!set && !tooltip.classList.contains('ql-hidden')) {
				set = true;
				const input = document.querySelector(`[data-formula='e=mc^2']`);
				input.placeholder = '';
			}
			if (set && tooltip.classList.contains('ql-hidden')) {
				set = false;
			}
		}
	}, 0);
};

export const getBase64 = (file) => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
		reader.readAsDataURL(file);
	});
};
