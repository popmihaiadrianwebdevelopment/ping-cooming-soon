const form = document.getElementById('form');
const email = document.getElementById('email');
const button = document.getElementById('button');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    var emailValue = email.value.trim();
    var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if(emailValue === ''){
        errorFunc(email, 'Email cannot be empty')
      }else if (!emailValue.match(pattern)){
        errorFunc(email, 'Email is not valid')
      }
      else {
        successFunc(email)
      }
})

function errorFunc(req, message){
    const formControl = req.parentElement;
    const span = formControl.querySelector('span');
    span.innerText = message;
    req.className += 'error';
    span.className += 'error-text';
}

function successFunc(req) {
    req.className += 'success';
}

// function validate() {
//     const emailValue = email.target.trim()

//     if (emailValuie = '') {
//         setErrorFor (email, 'Email cannot be empty');
//     }else if (!isEmail(emailValue)) {
//         setErrorFor (email, 'Please provide a valid email');
//     } else {
//         setSuccessFor (email)
//     }
// }

// function setErrorFor() {

// }

// function setSuccesFor() {

// }

// function isEmail(email) {
//     return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test (
//         email)
    
// }
