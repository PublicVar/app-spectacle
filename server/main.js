import { Meteor } from 'meteor/meteor';
import { fixtures } from '../imports/startup/server/fixtures';

import '../imports/api/schools/schools.publications';
import '../imports/api/schools/schools.methods';

Meteor.startup(() => {
  fixtures.loadSchools();
});
