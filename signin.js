document.addEventListener('DOMContentLoaded', function() {

    const signInForm = document.querySelector('.form');

    signInForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get username and password input values
        const username = signInForm.querySelector('input[name="username"]').value;
        const password = signInForm.querySelector('input[name="password"]').value;

        if (username.trim() === '' || password.trim() === '') {
            alert('Please enter both username and password.');
            return;
        }

        // Testing
        console.log('Username:', username);
        console.log('Password:', password);

    });
});
