import styles from '@styles/Competitive.module.css';

const Exams = ({ data }) => {
    return (
        <>
            {
                data.map((unit, index) => {
                    const title = unit.title;
                    return (
                        <div key={index} className={styles.card}>{title}</div>
                    )
                })
            }
        </>
    );
};

export default Exams;