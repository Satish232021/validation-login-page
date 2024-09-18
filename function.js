const form = document.getElementById('form');
const first_name = document.getElementById('first_name');
const user_email = document.getElementById('user_email');
const user_password = document.getElementById('user_password');
const user_repeat_password = document.getElementById('user_repeat_password');
const error_message = document.getElementById('error_message');

form.addEventListener('submit', (e) => {
    // e.preventDefault();
    let errors = [];
    if(first_name){
        errors = getSignupFormErrors(first_name.value, user_email.value, user_password.value, user_repeat_password.value);
    }else{
        errors = getLoginFormErrors(user_email.value, user_password.value );
    }

    if(errors.length > 0){
        e.preventDefault();
        error_message.innerText = errors.join(". ");
    }
});


function getSignupFormErrors(firstname, email, password, repeatPassword) {
    let errors =[];
    if( firstname === '' || firstname == null ){
        errors.push('firstname is required');
        first_name.parentElement.classList.add('incorrect');
    }
    if( email === '' || email == null ){
        errors.push('email is required');
        user_email.parentElement.classList.add('incorrect');
    }
    if( password === '' || password == null ){
        errors.push('password is required');
        user_password.parentElement.classList.add('incorrect');
    }
    if(password.length < 8) {
        errors.push('Password must caontain at least 8 characters');
        user_password.parentElement.classList.add('incorrect');

    }
    if ( password !== repeatPassword ){
        errors.push('Password does not match');
        user_repeat_password.parentElement.classList.add('incorrect');
        user_password.parentElement.classList.add('incorrect');


    }
    return errors;
}

function getLoginFormErrors(email, password) {
    let errors = [];
    if( email === '' || email == null ){
        errors.push('email is required');
        user_email.parentElement.classList.add('incorrect');
    }
    if( password === '' || password == null ){
        errors.push('password is required');
        user_password.parentElement.classList.add('incorrect');
    }
    return errors;
}

const allInputs = [first_name, user_email, user_password, user_repeat_password].filter((input) => input != null)

allInputs.forEach((input) => {
    input.addEventListener('input', () => {
        if (input.parentElement.classList.contains('incorrect')) {
            input.parentElement.classList.remove('incorrect');            
        }
        error_message.innerText = '';
    })
});
