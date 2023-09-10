document.addEventListener('DOMContentLoaded', (event) => {

    const loginFormHandler = async (event) => {
        event.preventDefault();

        // Collect values from the login form
        const username = document.querySelector('#username-login').value.trim();
        const password = document.querySelector('#password-login').value.trim();

        if (username && password) {
            const response = await fetch('api/users/login', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                document.location.replace('/');
            } else {
                alert(response.statusText);
            }
        }
    };

    //signup form handler
    const signupFormHandler = async (event) => {
        event.preventDefault();

        const username = document.querySelector('#username-signup').value.trim();
        const password = document.querySelector('#password-signup').value.trim();

        if (username && password) {
            const response = await fetch('/api/user', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                document.location.replace('/');
            } else {
                alert(response.statusText);
            }
        }
    };

    if (document.querySelector('.login-form')) {
        document
            .querySelector('.login-form')
            .addEventListener('submit', loginFormHandler);
    }
    if (document.querySelector('.signup-form')) {
        document
            .querySelector('.signup-form')
            .addEventListener('submit', signupFormHandler);
    }
});