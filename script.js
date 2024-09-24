document.addEventListener('DOMContentLoaded', function() {
    const openButton = document.getElementById('openPopup');
    const closeButton = document.getElementById('closePopup');
    const overlay = document.getElementById('popupOverlay');
    const form = document.getElementById('subscribeForm');
  
    openButton.addEventListener('click', function() {
      overlay.style.display = 'block';
    });
  
    closeButton.addEventListener('click', function() {
      overlay.style.display = 'none';
    });
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      // Handle form submission here
      console.log('Form submitted');
      overlay.style.display = 'none';
    });
  });