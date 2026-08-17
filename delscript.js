const { use } = require("react")

function delprofile()
{
    console.log('Profile deletion initiated...')
    window.location.href = 'deleteprofile.html'
}

function delprof(token)
{
    let userpassword = prompt('Please enter your password to continue')
    if(userpassword !== null)
    {
        //proceed with deletion
        
    }
    else {
        //proccess canceled
        alert('Profile deletion canceled')
        window.location.href = 'join.html'
    }
}