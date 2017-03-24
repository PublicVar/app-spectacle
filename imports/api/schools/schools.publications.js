import { Meteor } from 'meteor/meteor';
import { Schools } from './schools';

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('schools', function schoolsPublication() {
     Meteor._sleepForMs(2000); //simulate slow server
    return Schools.find();
  });
}
