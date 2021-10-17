const emailForm = document.querySelector('.email');
const email = document.querySelector('.email input');
const errorIcon = document.querySelector('.error-icon');
const errorMsg = document.querySelector('small');

email.addEventListener('focusin', () => {
  errorIcon.classList.remove('show-error');
  errorMsg.classList.remove('show-error');
});

emailForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailValue = email.value.trim();
  if (!isEmail(emailValue)) {
    // Throw Error
    errorIcon.classList.add('show-error');
    errorMsg.classList.add('show-error');
  } else {
    // Submit
    console.log('Form Submitted');
    e.target.submit();
  }
});

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
