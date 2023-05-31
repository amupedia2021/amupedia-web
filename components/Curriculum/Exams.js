import styles from '@styles/Home.module.css';
import Link from 'next/Link';
import Tilt from 'react-vanilla-tilt';

const Exams = ({ data }) => {
    return (
        <>
            {
                data.map((unit, index) => {
                    const title = unit.title;
                    return (
                        <>
                            <div className={styles.grabnotes}>
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