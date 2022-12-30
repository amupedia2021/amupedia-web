import { useState } from 'react';
import styles from '@styles/scss/subject.module.scss';
import Header from '../common/Header/Header';
import Footer from '../common/Footer';
import Taskbar from './Taskbar';
import Notes from './Notes';

function Subject({ data }) {
  const [section, setSection] = useState('notes');

  return (
    <div>
      <Header image={data.bgImg} text={data.name} />
      <div className={styles.main}>
        <Taskbar section={section} setSection={setSection} />
        {section === 'notes' && <Notes units={data.units} />}
      </div>
      <Footer />
    </div>
  );
}

export default Subject;
