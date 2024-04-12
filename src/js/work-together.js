const modal = document.querySelector('.footer-modal');

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cooperation-comment-form');
    const emailInput = document.getElementById('email');
    const commentInput = document.getElementById('comment');
    const sendButton = document.querySelector('.footer-btn-form');
    const modal = document.querySelector('.footer-modal');
  
    sendButton.addEventListener('click', function(event) {
      event.preventDefault();
  
     
      if (validateEmail(emailInput.value) && commentInput.value.trim() !== '') {
        showModal();
      } else {
      }
    });
  
    function validateEmail(email) {
      const regex = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      return regex.test(email);
    }
  
    function showModal() {
      modal.classList.add('open');
    }
  });
  