import { Meteor } from 'meteor/meteor';
import { fixtures } from '../imports/startup/server/fixtures';
import '../imports/api/schools/schools';
import '../imports/api/schools/schools.publications';
import '../imports/api/schools/schools.methods';

//Import globally the collection for the admin panel
import {Schools as _Schools} from "../imports/api/schools/schools";
Schools = _Schools;

import '../imports/admin/admin-config';

Meteor.startup(() => {
  fixtures.loadSchools();
  // fixtures.loadAdminUsers();
});
