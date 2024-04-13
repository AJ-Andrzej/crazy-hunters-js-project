import { postRequest } from './api';
const modal = document.querySelector(".footer-modal");

  const form = document.getElementById("cooperation-comment-form");
  const emailInput = document.getElementById("email");
  const commentInput = document.getElementById("comment");
  

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    if (validateEmail(emailInput.value) && commentInput.value.trim() !== "") {
      const emailInputValue = form.elements.email.value;
      const commentInputValue = form.elements.comment.value;
      const req = {
    email: emailInputValue,
    comment: commentInputValue
      }
      const post = await postRequest(req)
      try{
        showModal();
        form.reset()
      } catch {
        console.log(err);
      }
      
      
    }
  });

  function validateEmail(email) {
    const regex = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return regex.test(email);
  }
 
  function showModal() {
    modal.classList.remove("visually-hidden");
    const close = setTimeout (() => modal.classList.add("visually-hidden"), 5000)
  };

const closeBtn = document.querySelector(".footer-close-btn");
const modalBackdrop = document.querySelector(".footer-modal");
closeBtn.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", function (event) {
  if (event.target === modalBackdrop) {
    closeModal();
  }
});
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});
function closeModal() {
  modal.classList.add("visually-hidde");
}
  