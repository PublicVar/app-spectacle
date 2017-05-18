import { Meteor } from 'meteor/meteor';
import { fixtures } from '../imports/startup/server/fixtures';

import '../imports/api/schools/schools';
import '../imports/api/schools/schools.publications';
import '../imports/api/schools/schools.methods';



//Import globally the collection for the admin panel
import { Schools as _Schools } from "../imports/api/schools/schools";
Schools = _Schools;


import '../imports/admin/admin-config';

if (Meteor.isServer) {
    Meteor.startup(() => {
        Push.Configure({
            /*apn: {
                certData: Assets.getText('apnDevCert.pem'),
                keyData: Assets.getText('apnDevKey.pem'),
                passphrase: process.env.PASSPHRASE,
                production: false,
                //gateway: 'gateway.push.apple.com',
            },*/
            gcm: {
                apiKey: process.env.APP_ANDROID_API_KEY,
                projectNumber: 154129027718
            },
            production: true,
            // 'sound' true,
            // 'badge' true,
            // 'alert' true,
            // 'vibrate' true,
            // 'sendInterval': 15000, Configurable interval between sending
            // 'sendBatchSize': 1, Configurable number of notifications to send per batch
            // 'keepNotifications': false,
            //
        });
    });
}