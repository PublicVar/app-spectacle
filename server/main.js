import { Meteor } from 'meteor/meteor';
import { fixtures } from '../imports/startup/server/fixtures';

Meteor.startup(() => {
  fixtures.loadSchools();
});
