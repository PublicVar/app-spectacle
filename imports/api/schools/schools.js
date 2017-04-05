import {
    Mongo
} from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
export const Schools = new Mongo.Collection('schools');

function loggedInAdmin() {
    return !!Meteor.user() && !!Roles.userIsInRole(Meteor.userId(), ['admin']);
}

function loggedIn() {
    return !!Meteor.user();
}

Schools.allow({
    insert: loggedInAdmin,
    update: loggedIn,
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
    },
    'followers.$': {
        type: String,
        label: "Followers",
        optional: true
    },

    description: {
        type: String,
        label: "Description",
        optional: true
        // autoform: {
        //     afFieldInput: {
        //         type: 'summernote',
        //         class: 'editor', // optional
        //         // settings: // summernote options goes here
        //     rows: 10
        //     },
        // }
    }
});

Schools.attachSchema(SchemaSchools);