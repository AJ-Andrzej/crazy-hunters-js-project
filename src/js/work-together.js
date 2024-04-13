const modal = document.querySelector(".footer-modal");

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("cooperation-comment-form");
  const emailInput = document.getElementById("email");
  const commentInput = document.getElementById("comment");
  const sendButton = document.querySelector(".footer-btn-form");
  const modal = document.querySelector(".footer-modal");

  sendButton.addEventListener("click", function (event) {
    event.preventDefault();

    if (validateEmail(emailInput.value) && commentInput.value.trim() !== "") {
      showModal();
    }
  });

  function validateEmail(email) {
    const regex = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return regex.test(email);
  }
 
  function showModal() {
    modal.classList.remove("is-hidden");
  }
});

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
  modal.classList.add("is-hidden");
}
  