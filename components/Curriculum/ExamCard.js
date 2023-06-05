import styles from '@styles/scss/exam.module.scss';
import Image from 'next/image';

const ExamCard = ({ data }) => {
    return (
        <>
            <div className={styles.material}>
                <div className={styles.imageDiv}>
                    <Image src={`${data.icon}`} width={0} height={0} sizes="100vh"></Image>
                </div>
                <div className={styles.detailDiv}>
                    <p>DATE :  {data.date}</p>
                    <p>MIN QUALIFICATION :  {data.minQualification}</p>
                    <p>BENEFITS :  {data.benefit}</p>
                </div>
            </div>
        </>
    );
};

export default ExamCard;