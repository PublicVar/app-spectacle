import { Session } from 'meteor/session';

//Import Accounts 
import '../imports/startup/client/account-config.js';

//load Templates 
import '../imports/ui/pages/home';
import '../imports/ui/pages/login';
import '../imports/ui/pages/school';
import '../imports/ui/pages/admin/schoolUpdate';
//Import Router
import '../imports/startup/client/routes';
import '../imports/api/schools/schools.methods';
// import '../imports/api/images/images.methods';

import '../imports/admin/admin-config';

import '../imports/startup/client/global-template-helpers.js';


//Import globally the collection for the admin panel
import { Schools as _Schools } from "../imports/api/schools/schools";
Schools = _Schools;


Meteor.startup(() => {
    Push.Configure({
        android: {
            senderID: 154129027718,
            alert: true,
            badge: true,
            sound: true,
            vibrate: true,
            clearNotifications: true
            // icon: '',
            // iconColor: ''
        },
        ios: {
            alert: true,
            badge: true,
            sound: true
        }
    });
    //display push notif when app is running
    Push.addListener('alert', function(notification) {
     alert( notification.message );
    });

    Push.deny({
        send: function(userId, notification) {
            return true; // Deny all users to send
        }
    });

});