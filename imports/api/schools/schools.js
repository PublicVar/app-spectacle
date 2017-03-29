
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema'; 
export const Schools = new Mongo.Collection('schools');

function loggedInAdmin() {
  return !!Meteor.user() && !!Roles.userIsInRole(Meteor.userId(), ['admin']);
}

Schools.allow({
  insert: loggedInAdmin,
  update: loggedInAdmin,
  remove: loggedInAdmin
});

let SchemaSchools = new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    max: 100
  },
  followers: {
    type: Array,
    label: "Followers",
    optional: true
  },
  description: {
    type: String,
    label: "Description",
    optional: true,
    max: 1000
  }
});

Schools.attachSchema(SchemaSchools);