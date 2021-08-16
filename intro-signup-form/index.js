const form = document.querySelector('#signup-form');
const fname = document.querySelector('.fname');
const lname = document.querySelector('.lname');
const email = document.querySelector('.email');
const password = document.querySelector('.password');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
  if (form.querySelectorAll('div.form-control').length === form.querySelectorAll('div.form-control.success').length) {
    // form.submit(); By Asif
    console.log('Form Submitted');
    e.target.submit()
  }

});

function checkInputs() {
  const fnameValue = fname.value.trim();
  const lnameValue = lname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (fnameValue === '') {
    setErrorFor(fname);
  } else if (fnameValue.length < 2) {
    setErrorFor(fname, 'First Name must have atleast 2 characters');
  } else {
    setSuccessFor(fname);
  }
  if (lnameValue === '') {
    setErrorFor(lname);
  } else {
    setSuccessFor(lname);
  }
  if (emailValue === '') {
    setErrorFor(email);
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Looks like this is not an email');
  } else {
    setSuccessFor(email);
  }
  if (passwordValue === '') {
    setErrorFor(password);

  } else if (isBadPassword(passwordValue)) {
    setErrorFor(password, 'Bad Password');

  } else {
    setSuccessFor(password);
  }
}

function setErrorFor(input, msg = '') {
  const formControl = input.parentElement;

  formControl.className = 'form-control failed'
  if (msg)
    formControl.querySelector('small').innerText = msg;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success'
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isBadPassword(password) {
  return (password.length < 6) ? true : false;
}
