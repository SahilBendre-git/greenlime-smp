window.onload = loadsets()

function loadsets()
{
    fetch(`https://x8ki-letl-twmt.n7.xano.io/api:0loksVvR/check_status?user_uuid=${localStorage.getItem('token')}`)
    .then(res => res.json())
    .then(server_flag => {
        fetch(`https://x8ki-letl-twmt.n7.xano.io/api:0loksVvR/get_server_details_with_flag_names?flag=${server_flag}`)
        .then(res => res.json())
        .then(server_details => {
            if(server_details == 'You are not authorized to view this information')
            {
                document.getElementById('outmessage').innerText = server_details;
            }
            else if(server_details == 'red')
            {
                document.getElementById('outmessage').innerText = 'This is not a valid account';
                logout();
            }
            else if(server_details == 'Invalid status flag') {
                document.getElementById('outmessage').innerText = 'You must be logged in to view this information';
            }
            else {
                document.getElementById('outmessage').innerText = ''
                
                document.getElementById('server-soft').innerText = server_details.Server_Software;
                document.getElementById('Servv').innerText = server_details.Server_version;
                document.getElementById('modes').innerText = server_details.mode;


                console.log(server_details)
                if(server_details.code !== 'ERROR_CODE_TOO_MANY_REQUESTS') 
                document.getElementById('mainserverinfodiv').style.display = 'grid'
                else
                document.getElementById('outmessage').innerText = 'Too many requests, please come back after some time (You are not at fault)';

            }
        })
        .catch(error => {
            alert('An error occured, please try again after few minutes')
            console.log(error.message)
        })
    })
}

function logout()
{
    localStorage.removeItem('token')
    location.reload();
}