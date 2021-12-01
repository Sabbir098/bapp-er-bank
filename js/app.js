document.getElementById('submit-btn').addEventListener('click', function(){
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //  get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // checking email & password
    if(userEmail == 'sontan@gmail.com' && userPassword == 'sontan'){
        window.location.href = 'banking.html';
    }
    else{
        alert('Alert Please give us a valid email or password')
    }
})
