import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '@styles/scss/_writeblog.module.scss';
import {
	autoResizeHeight,
	dataChangeHandler,
	initializeState,
} from 'utils/writeblog/writeBlogUtils';
import 'suneditor/dist/css/suneditor.min.css';
import disableNavbar from 'utils/writeblog/disableNavbar';
import { editorOptions, handleImageUpload } from 'utils/writeblog/editorUtils';
import defaultImg from '@images/blog/default.svg';

const SunEditor = dynamic(import('suneditor-react'), {
	ssr: false,
});

const WriteBlog = () => {
	const [data, setData] = useState({
		title: '',
		coverImg: '',
		coverImgName: '',
		content: '',
	});

	useEffect(() => {
		initializeState(setData);
		disableNavbar();
	}, []);

	const contentChanged = (val) => {
		if (val.length > 2500000) return alert('Words limit reached');
		setData({ ...data, content: val });
		sessionStorage.setItem('content', val);
	};

	const removeCoverImg = () => {
		sessionStorage.setItem('coverImg', '');
		setData({ data, coverImg: '' });
	};

	return (
		<section className={styles.cover}>
			<div className={styles.main}>
				<div className={styles.pre}>
					<div
						data-img="coverImage"
						className={`${styles.coverImg} ${
							data.coverImg === '' && styles.drop
						}`}
						onDragEnter={(e) => e.target.classList.add('drag')}
						onDragLeave={(e) => e.target.classList.remove('drag')}
						onDrop={(e) => e.target.classList.remove('drag')}
					>
						{data.coverImg === '' && (
							<>
								<span>Add a cover Image</span>
								<Image
									width="164px"
									height="172.8px"
									src={defaultImg}
									alt="Upload an Image"
								></Image>
								<span>Drop a file or Click to add</span>
							</>
						)}
						<input
							type="file"
							accept="image/*"
							name="coverImg"
							id="coverImg"
							onChange={(e) => {
								dataChangeHandler(e, data, setData);
							}}
						/>
						<img src={data.coverImg} alt="" />
						{data.coverImg !== '' && (
							<button onClick={removeCoverImg} className={styles.remove}>
								Remove
							</button>
						)}
					</div>
					<div className={styles.title}>
						<textarea
							type="text"
							name="title"
							id="title"
							value={data.title}
							onChange={(e) => {
								dataChangeHandler(e, data, setData);
								autoResizeHeight(e);
							}}
						></textarea>
						{data.title === '' && <span>Title...</span>}
					</div>
				</div>
				<SunEditor
					height="100%"
					width="100%"
					onImageUploadBefore={handleImageUpload}
					setOptions={editorOptions}
					onChange={contentChanged}
					setContents={data.content}
				/>
			</div>
		</section>
	);
};

export default WriteBlog;
