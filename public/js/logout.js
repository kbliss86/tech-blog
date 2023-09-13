// Initiate logout process
const logout = async () => {
    console.log('logout function')
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
    console.log('response: ', response)
    if (response.ok) {
        document.location.replace('/home');
    } else {
        alert(response.statusText);
    }
};

document.querySelector('#logout').addEventListener('click', logout);