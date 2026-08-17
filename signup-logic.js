function handleSignup() {
    let newuser = {
        R_Name: document.getElementById('signuprname').value,
        TL_Uname: document.getElementById('signupUser').value,
        Base_64_passcodes: btoa(document.getElementById('signupPass').value),
        user_emails: document.getElementById('signupemail').value,
        in_uuid: getOfflineUUID(document.getElementById('signupUser').value)
    };

    document.getElementById('message').innerText = 'Please wait...';

    fetch('https://x8ki-letl-twmt.n7.xano.io/api:0loksVvR/create_new_user_account', {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(newuser)
    })
    .then(res => res.json())
    .then(server_response => {
        if(server_response == 'blocked-already_registered')
            document.getElementById('message').innerText = 'Account already exists with certain credentials. Please try with a different Tlauncher username or email.';
        else{
            //Accoutn creation succeesful
           document.getElementById('message').innerText = 'Account created successfully, please Log in now..';
           showLogin();
        }
        })
        
    .catch(error => {
            document.getElementById('message').innerText = 'An error occured, please try again after sometime';
    })
    




}