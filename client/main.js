import { Session } from 'meteor/session';

//Import Accounts 
import '../imports/startup/client/account-config.js';

//load Templates 
import '../imports/ui/pages/home';
import '../imports/ui/pages/login';
import '../imports/ui/pages/school';
//Import Router
import '../imports/startup/client/routes';
import '../imports/api/schools/schools.methods';

import '../imports/admin/admin-config';

import '../imports/startup/client/global-template-helpers.js'; 


//Import globally the collection for the admin panel
import {Schools as _Schools}  from "../imports/api/schools/schools";
Schools = _Schools;


