import React, { useEffect } from 'react';

const AdBlockMessage = () => {
  useEffect(() => {
    if (window.blockAdBlock) {
      if (window.blockAdBlock.onDetected) {
        console.log('Ad blocker detected. Please disable it to access the content.');
        // Trigger the pop-up display
        showPopup();
      }
    }
  }, []);

  const showPopup = () => {
    const popup = document.createElement('div');
    popup.className = 'adblock-popup'; // Apply CSS styles to the pop-up

    const message = document.createElement('p');
    message.textContent = 'We use ads to keep our content free for you. Please disable your ad blocker to support us.';

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', () => {
      popup.remove(); // Close the pop-up when the close button is clicked
    });

    popup.appendChild(message);
    popup.appendChild(closeButton);
    document.body.appendChild(popup);
  };

  return null; // Return null since the pop-up is dynamically created
};

export default AdBlockMessage;
