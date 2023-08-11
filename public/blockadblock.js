(function() {
    var el = document.createElement('div');
    el.id = 'blockadblock';
    el.style.display = 'none';
    document.body.appendChild(el);
  
    // Check if the element is still hidden
    if (typeof window.blockAdBlock === 'undefined') {
      // AdBlocker detected
      // Perform your desired action or display a message to the user
      // Customize this part based on your requirements
  
      // Display a message to the user
      var message = document.createElement('div');
      message.innerHTML = 'Please disable your ad blocker to support our website.';
      document.body.appendChild(message);
    }
  })();
  