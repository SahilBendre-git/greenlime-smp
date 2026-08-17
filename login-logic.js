function handleLogin()
{
    let inuser = {
        input_username: document.getElementById('loginUser').value,
        input_password: document.getElementById('loginPass').value
    }

    fetch(`https://x8ki-letl-twmt.n7.xano.io/api:0loksVvR/login_user?input_username=${inuser.input_username}&input_password=${btoa(inuser.input_password)}`)
    .then(res => res.json())
    .then(server_response => {
        console.log(server_response)
        if(server_response == 'not-found')  
        {
           document.getElementById('message').innerText = 'User not registered';
        }
        else 
        {
            if(server_response == 'password-error')
            {
                document.getElementById('message').innerText = 'Invalid Password'
            }
            else
            { 
                //logged in
                document.getElementById('message').innerText = 'Login approved.'
                localStorage.setItem('token', server_response);
                location.reload();
            }
        }
    })
    .catch(error => {
        console.log('Error, '+error)
    })

}