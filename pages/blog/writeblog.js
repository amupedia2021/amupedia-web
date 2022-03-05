import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import styles from '@styles/scss/_writeblog.module.scss';
import 'react-quill/dist/quill.snow.css';
import Sidebar from 'components/userSidebar';
import { disableQuillLink, getBase64 } from 'utils/writeblog/writeBlogUtils';
import { modules, formats } from 'utils/quill/quillItems';
import disableNavbar from 'utils/writeblog/disableNavbar';

const Quill = dynamic(import('react-quill'), {
	ssr: false,
	loading: () => <p>Loading ...</p>,
});

const WriteBlog = () => {
	const [data, setData] = useState({
		title: '',
		coverImg: '',
		coverImgName: '',
		content: '',
	});

	useEffect(() => {
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

		console.log(sessionStorage.getItem('content').length);

		disableNavbar();
		disableQuillLink();
	}, []);

	const dataChangeHandler = (e) => {
		if (e.target.name === 'title') {
			sessionStorage.setItem('title', e.target.value);
			setData({ ...data, title: e.target.value });
		} else if (e.target.name === 'coverImg') {
			const file = e.target.files[0];
			console.log(file);
			if (file) {
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

	const contentChanged = (val) => {
		setData({ ...data, content: val });
		sessionStorage.setItem('content', val);
	};

	return (
		<section className={styles.cover}>
			<div className={styles.main}>
				<div className={styles.pre}>
					<label htmlFor="title" className={styles.titlelbl}>
						<span style={{ fontWeight: '900', fontSize: '1.2rem' }}>
							Title :{' '}
						</span>
						<input
							type="text"
							name="title"
							id="title"
							value={data.title}
							onChange={dataChangeHandler}
							className={styles.title}
						/>
					</label>

					<label htmlFor="coverImg">
						<span style={{ fontWeight: '900', fontSize: '1.2rem' }}>
							{' '}
							Cover Image :{' '}
						</span>
						<input
							type="file"
							accept="image/*"
							name="coverImg"
							id="coverImg"
							onChange={dataChangeHandler}
							style={{
								display: 'none',
							}}
						/>
						<span className={styles.coverImgChooser}>
							{data.coverImg === '' ? 'Choose Image' : 'Change Image'}
						</span>
						<span>{data.coverImgName}</span>
					</label>
				</div>
				<Quill
					modules={modules}
					formats={formats}
					className={styles.editor}
					bounds={'#root'}
					value={data.content}
					onChange={contentChanged}
					readOnly={
						data.title === '' ||
						data.coverImg === '' ||
						data.content.length > 1800000
					}
				/>
			</div>
		</section>
	);
};

export default WriteBlog;
