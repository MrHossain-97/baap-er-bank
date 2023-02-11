// step 1: add click event handler with submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    // step 2: get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email').value;
    // step 3: get the password inside the password field
    const passwordField = document.getElementById('user-password').value;
    
    //Danger: do not verify email and password on the client side
    // step 4: verify email and password
    if (emailField === 'mrhossain97.programming@gmail.com' && passwordField === 'Mrh@#123') {
        window.location.href='bank.html';
    }
    else{
        alert('invalid email or password!')
    }
})