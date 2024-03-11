document.addEventListener('DOMContentLoaded', function() {

    const signUpForm = document.querySelector('.form');

    signUpForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get input values
        const fullname = signUpForm.querySelector('input[name="fullname"]').value;
        const username = signUpForm.querySelector('input[name="username"]').value;
        const email = signUpForm.querySelector('input[name="email"]').value;
        const password = signUpForm.querySelector('input[name="password"]').value;
        const confirmPass = signUpForm.querySelector('input[name="confirmPass"]').value;

        if (fullname.trim() === '' || username.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPass.trim() === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Validate if password matches confirm password
        if (password !== confirmPass) {
            alert('Passwords do not match.');
            return;
        }

        //Testing...
        console.log('Fullname:', fullname);
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);

    });
});
