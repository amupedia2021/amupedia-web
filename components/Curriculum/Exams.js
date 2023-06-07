import styles from '@styles/Home.module.css';
import Link from 'next/link';

const Exams = ({ data }) => {
    return (
        <>
            {
                data.map((unit, index) => {
                    return (
                        <>
                            <div data-aos="fade-up" className={styles.grabnotes} key={index}>
                                <Link href={`/competitiveExams/${unit.title}`} key={index}>
                                    <div style={{
                                        background: `url(${unit.icon}) no-repeat center center`,
                                        backgroundSize: "contain"
                                    }}>
                                        <p>{unit.title}</p>
                                    </div>
                                </Link>
                            </div>
                        </>
                    )
                })
            }
        </>
    );
};

export default Exams;