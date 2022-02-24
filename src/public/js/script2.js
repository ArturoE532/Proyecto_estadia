
let loginBtn = document.querySelector('.account-form .login-btn');


loginBtn.onclick = () =>{
  loginBtn.classList.add('active');
  document.querySelector('.account-form .login-form').classList.add('active');
  document.querySelector('.account-form .register-form').classList.remove('active');
};

let accountForm = document.querySelector('.account-form')

document.querySelector('#account-btn').onclick = () =>{
  accountForm.classList.add('active');
}

document.querySelector('#close-form').onclick = () =>{
  accountForm.classList.remove('active');
};

/*==================== SERVICES MODAL ====================*/
const logmodalViews = document.querySelectorAll('.login__modal'),
      logmodalCloses = document.querySelectorAll('.login__modal-close')

let logmodal = function(logmodalClick){
    logmodalViews[logmodalClick].classList.add('active-modall')
}

logmodalCloses.forEach((logmodalClose) => {
    logmodalClose.addEventListener('click', () => {
        logmodalViews.forEach((logmodalView) => {
            logmodalView.classList.add('active-modall')
        })
    })
})