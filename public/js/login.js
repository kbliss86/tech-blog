//this file is for the login and signup forms
document.addEventListener('DOMContentLoaded', (event) => {
    //login form handler
    const loginFormHandler = async (event) => {
        event.preventDefault();

        // Collect values from the login form
        const username = document.querySelector('#username-login').value.trim();
        const password = document.querySelector('#password-login').value.trim();

        if (username && password) {
            const response = await fetch('/api/users/login', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                document.location.replace('/home');
            } else {
                alert('Failed to log in');
            }
        }
    };

    //signup form handler
    const signupFormHandler = async (event) => {
        console.log('signupFormHandler Function');
        event.preventDefault();
        // Collect values from the signup form
        const username = document.querySelector('#username-signup').value.trim();
        const password = document.querySelector('#password-signup').value.trim();

        if (username && password) {
            const response = await fetch('/api/users/signup', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                console.log('response.ok');
                document.location.replace('/home');
            } else {
                console.log('Failed to sign up');
                alert('Failed to sign up');
            }
        }
    };
    //event listeners for the login and signup forms
    if (document.querySelector('.login-form')) {
        document
            .querySelector('.login-form')
            .addEventListener('submit', loginFormHandler);
    }
    //event listeners for the signup form
    if (document.querySelector('.signup-form')) {
        document
            .querySelector('.signup-form')
            .addEventListener('submit', signupFormHandler);
    }
});
