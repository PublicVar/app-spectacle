import { Meteor } from 'meteor/meteor';
import { Schools } from './schools';
import {
    check
} from 'meteor/check';
import { Mongo } from 'meteor/mongo';
if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('schools', function schoolsPublication() {
      //  Meteor._sleepForMs(10000); //simulate slow server
    return Schools.find();
  });
  //Remove the content field because it has images
   Meteor.publish('schools-preview', function schoolsPublication() {
    //Meteor._sleepForMs(100000); //simulate slow server
    return Schools.find({}, { content:0 } );
  });
   Meteor.publish('school', function schoolPublication(id) {
      // Meteor._sleepForMs(2000); //simulate slow server
     check(id, String);
     id = new Mongo.ObjectID(id);
    return Schools.find({_id:id });
  });
}
