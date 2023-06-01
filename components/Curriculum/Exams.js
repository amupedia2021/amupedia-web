import styles from '@styles/Home.module.css';
import Link from 'next/link';

const Exams = ({ data }) => {
    return (
        <>
            {
                data.map((unit, index) => {
                    return (
                        <>
                            <div className={styles.grabnotes} key={index}>
                                <Link passHref href='/'>
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