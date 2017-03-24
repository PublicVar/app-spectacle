import {
    Meteor
} from 'meteor/meteor';
import {
    Schools
} from './schools';
import {
    check
} from 'meteor/check';

Meteor.methods({
    'schools.toggleFollow' (idSchool) {
        check(idSchool, String);

        if (!Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        //check if school exists
        school = Schools.find({
            _id: idSchool
        });
        if (!school) {
            throw new Meteor.Error('not-authorized');
        }

        //Add the user as follower by default
        let toggle = {
            $push: {
                followers: Meteor.userId()
            }
        };
        //if the user is already a follower remove him
        if (school.followers && school.followers.indexOf(Meteor.userId())) {
            toggle = {
                $pull: {
                    followers: Meteor.userId()
                }
            };
        }

        Schools.update(idSchool, toggle);
    }
});