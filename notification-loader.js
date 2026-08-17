document.addEventListener("DOMContentLoaded", loadnotifs);

function loadnotifs() {
    let nonotif = document.getElementById('hifea');
    let notif_holder_box = document.getElementById('notificationholder');

    // Clear previous notifications
    notif_holder_box.innerHTML = "";

    fetch('https://x8ki-letl-twmt.n7.xano.io/api:0loksVvR/get-notifications-from-admin-for-users')
        .then(res => res.json())
        .then(notifications => {

            let allnotifications = [];
            let token = localStorage.getItem('token');

            // Store notifications for current user
            notifications.forEach(notif => {
                if (notif.notification_for_user === token) {
                    allnotifications.push({
                        datetime: notif.created_at,
                        title: notif.notification_title,
                        content: notif.notification_content
                    });
                }
            });

            // Show "no notifications" message if empty
            if (allnotifications.length === 0) {
                nonotif.style.display = 'block';
                return;
            }

            // Hide "no notifications" message
            nonotif.style.display = 'none';

            // Show newest first
            for (let i = allnotifications.length - 1; i >= 0; i--) {
                let notif = allnotifications[i];

                // Notification card
                let newemail = document.createElement('div');
                newemail.className = 'notification';

                // Title
                let title = document.createElement('p');
                title.innerHTML = `<b>${notif.title}</b>`;

                // Button
                let viewbtn = document.createElement('button');
                viewbtn.innerText = 'Open Message';
                viewbtn.style.marginTop = '10px';
                viewbtn.style.padding = '8px 14px';
                viewbtn.style.backgroundColor = 'limegreen';
                viewbtn.style.color = 'black';
                viewbtn.style.border = 'none';
                viewbtn.style.borderRadius = '8px';
                viewbtn.style.cursor = 'pointer';

                // Open modal
                viewbtn.onclick = function () {
                    openEmailModal(
                        notif.title,
                        'Admin ~ GreenLime SMP',
                        notif.datetime,
                        notif.content
                    );
                };

                // Assemble card
                newemail.appendChild(title);
                newemail.appendChild(viewbtn);

                // Add to page
                notif_holder_box.appendChild(newemail);
                notif_holder_box.appendChild(document.createElement('br'))
            }
        })
        .catch(error => {
            console.error('Error loading notifications:', error);
        });
}