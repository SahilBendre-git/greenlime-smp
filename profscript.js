function checkuservalidity()
{
    fetch(`https://x8ki-letl-twmt.n7.xano.io/api:0loksVvR/check_if_uuid_is_valid?user_uuid=${localStorage.getItem('token')}`)
    .then(res => res.json())
    .then(server_response => {
        if(server_response == "validauth")
        {
            fetchuserwithtoken();
        }
    })
    .catch(error => {
        console.log(error)
        logout();
    })
}

function isValidUUID(str) {              
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(str);
}

function fetchuserwithtoken()
{
    fetch(`https://x8ki-letl-twmt.n7.xano.io/api:0loksVvR/give_user_details?token=${localStorage.getItem('token')}`)
    .then(res => res.json())
    .then(user => {
        document.getElementById('playerName').innerText = user.R_Name;
        document.getElementById('playerUName').innerText = user.TL_Uname;
        document.getElementById('playerEmail').innerText = user.user_emails; //
        document.getElementById('playeruuid').innerText = user.Gamer_UUID;
        if(user.approval)
        {
            document.getElementById('appstatus').innerText = "✅ Approved";
            document.getElementById('relmesg').innerText = 'You can now go to server page to get the server details.'
        }
        else {
            document.getElementById('appstatus').innerText = "⚠️ Pending";
            document.getElementById('relmesg').innerText = 'Your Registration Must be approved by the server admin before you can view the server details.'
        }
        //Set editprofile details.

        document.getElementById('editName').value = user.R_Name
        document.getElementById('editUsername').value = user.TL_Uname
        document.getElementById('editEmail').value = user.user_emails

        showDashboard()
    })
}