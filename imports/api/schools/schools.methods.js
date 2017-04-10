import {
    Meteor
} from 'meteor/meteor';
import {
    Schools
} from './schools';
import {
    check
} from 'meteor/check';
import { Mongo } from 'meteor/mongo';

Meteor.methods({
    'schools.follow' (idSchool) {
        check(idSchool, String);
        idSchool = new Mongo.ObjectID(idSchool);

        if (!Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        //check if school exists
        school = Schools.findOne(idSchool);

        if (!school) {
            throw new Meteor.Error('not-authorized');
        }

        //if the user is already a follower remove him
        if (!school.followers || school.followers.indexOf(Meteor.userId()) < 0) {

            Schools.update(idSchool, {
                $push: {
                    followers: Meteor.userId()
                }
            });
        }
    },
    'schools.unfollow' (idSchool) {
        check(idSchool, String);
        idSchool = new Mongo.ObjectID(idSchool);

        if (!Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        //check if school exists
        school = Schools.findOne(idSchool);

        if (!school) {
            throw new Meteor.Error('not-authorized');
        }

        //if the user is already a follower remove him
        if (school.followers &&  school.followers.indexOf(Meteor.userId()) >= 0) {

            Schools.update(idSchool, {
                $pull: {
                    followers: Meteor.userId()
                }
            });
        }
    },

});