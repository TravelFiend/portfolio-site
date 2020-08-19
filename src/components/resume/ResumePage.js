import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import styles from './Resume.css';
import Resume from './Resume';

const ResumePage = () => {
  const ref = useRef();

  const handlePrint = useReactToPrint({
    content: () => ref.current,
  });

  return (
    <div className={styles.ResumeWrapper}>
      <button onClick={handlePrint}>Print this out!</button>
      <Resume ref={ref} />
    </div>
  );
};

export default ResumePage;
