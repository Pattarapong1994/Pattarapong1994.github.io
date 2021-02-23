var openloginRight = document.querySelector('.h1');
var loginWrapper = document.querySelector('.login-wrapper');

openloginRight.addEventListener('click', function() {
    loginWrapper.classList.toggle('open');
});