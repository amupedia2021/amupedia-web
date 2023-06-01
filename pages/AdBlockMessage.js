import React, { useEffect } from 'react';

const AdBlockMessage = () => {
  useEffect(() => {
    if (window.blockAdBlock) {
      if (window.blockAdBlock.onDetected) {
        console.log('Ad blocker detected. Please disable it to access the content.');
      }
    }
  }, []);

  return (
    <div>
      <h1>AdBlock Detected</h1>
      <p>Please disable your ad blocker to access the content.</p>
    </div>
  );
};

export default AdBlockMessage;
