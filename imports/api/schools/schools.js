import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker'
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
    slug: {
        type: String
    },
    followers: {
        type: Array,
    },
    finished: {
        type: Boolean,
        optional: true
    },
    incoming: {
        type: Boolean,
        optional: true
    },
    'followers.$': {
        type: String,
        label: "Followers",
        optional: true
    },
    startAt: {
        type: Date,
        autoform: {
            afFieldInput: {
                type: "bootstrap-datetimepicker"
            }
        }
    },
    description: {
        type: String,
        label: "Description",
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'summernote',
                class: 'editor', // optional
                // settings: // summernote options goes here
                rows: 10
            },
        }
    },
    content: {
        type: String,
        label: "Contenu",
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'summernote',
                class: 'editor', // optional
                // settings: // summernote options goes here
                rows: 10
            },
        }
    }
});

Schools.attachSchema(SchemaSchools);