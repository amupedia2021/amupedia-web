import styles from '@styles/scss/notes.module.scss';
import PdfShow from './PdfShow';

const Notes = ({ units }) => {
  return (
    <>
      {units.map((unit, index) => {
        const title = 'Unit ' + unit.unitNo + ' : ' + unit.unitName;
        return (
          <div key={index}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.material}>
              {unit.notes.map((pdfLink, idx) => {
                return (
                  <PdfShow
                    key={idx}
                    link={pdfLink}
                    tagLine={'Part ' + Number(idx + 1)}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Notes;
