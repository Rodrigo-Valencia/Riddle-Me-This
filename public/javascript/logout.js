const logOut = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        }
    });

    if (response.ok) {
        document.location.replace('/');
    }
    else {
        alert('Log Out Failed!');
    }
}

document.querySelector('#logOut').addEventListener('click', logOut);