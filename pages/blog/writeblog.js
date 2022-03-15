import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import styles from '@styles/scss/_writeblog.module.scss';
import {
	dataChangeHandler,
	initializeState,
} from 'utils/writeblog/writeBlogUtils';
import 'suneditor/dist/css/suneditor.min.css';
import disableNavbar from 'utils/writeblog/disableNavbar';
import { editorOptions, handleImageUpload } from 'utils/writeblog/editorUtils';
import WriteBlogDefaultImg from 'components/WriteBlogDefaultImg';
import ContentEditable from 'react-contenteditable';

const SunEditor = dynamic(import('suneditor-react'), {
	ssr: false,
});

const WriteBlog = () => {
	const [data, setData] = useState({
		title: '',
		coverImg: '',
		content: '',
	});

	useEffect(() => {
		initializeState(setData);
		disableNavbar();
	}, []);

	const contentChanged = (val) => {
		if (val.length > 2500000) return alert('Words limit reached');
		setData({ ...data, content: val, title: sessionStorage.getItem('title') });
		sessionStorage.setItem('content', val);
	};

	const removeCoverImg = () => {
		sessionStorage.setItem('coverImg', '');
		setData({ ...data, coverImg: '' });
	};

	const titleChangeHandler = (e) => {
		e.target.name = 'title';
		dataChangeHandler(e, data, setData);
	};

	const titlePasteHandler = (e) => {
		e.preventDefault();
		const text = e.clipboardData.getData('text/plain');
		const selection = document.getSelection();
		const range = selection.getRangeAt(0);
		range.deleteContents();
		const textNode = document.createTextNode(text);
		range.insertNode(textNode);
		sessionStorage.setItem('title', textNode.innerText);
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
								<div className={styles.defaultImg}>
									<WriteBlogDefaultImg />
								</div>
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
						<ContentEditable
							id="title"
							html={data.title}
							onChange={titleChangeHandler}
							onPaste={titlePasteHandler}
						></ContentEditable>
						{data.title === '' && <span>Title...</span>}
					</div>
				</div>
				<SunEditor
					height="100%"
					width="100%"
					className={styles.editor}
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
