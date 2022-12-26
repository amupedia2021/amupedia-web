import Image from 'next/image';
import styles from '@styles/scss/notes.module.scss';
import pdfIcon from '@images/btech/firstYear/pdfIcon.svg';

const PdfShow = (props) => {
  const { link, tagLine } = props;

  return (
    <div className={styles.pdficon}>
      <a href={link} target='_blank' rel='noreferrer'>
        <div className={styles.iconWrapper}>
          <Image
            src={pdfIcon}
            alt='PdfIcon'
            width='99'
            height='110.4'
            className={styles.pdfImg}
          ></Image>
        </div>
        <p className={styles.tagLine}>{tagLine}</p>
      </a>
    </div>
  );
};

export default PdfShow;
