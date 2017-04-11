import {
    Meteor
} from 'meteor/meteor';
import {
    Schools
} from './schools';
import {
    check
} from 'meteor/check';
import {
    Mongo
} from 'meteor/mongo';
import Checker from '../services/checker';

Meteor.methods({
    'schools.follow' (idSchool) {

        Checker.isUserLoggedIn();
        const school = Checker.isSchool(idSchool);


        if (!school.followers || school.followers.indexOf(Meteor.userId()) < 0) {

            Schools.update(school._id, {
                $push: {
                    followers: Meteor.userId()
                }
            });
        }
    },
    'schools.unfollow' (idSchool) {

        Checker.isUserLoggedIn();
        const school = Checker.isSchool(idSchool);

        if (school.followers && school.followers.indexOf(Meteor.userId()) >= 0) {

            Schools.update(school._id, {
                $pull: {
                    followers: Meteor.userId()
                }
            });
        }
    },
    'schools.toggle_follow' (idSchool, isFollow) {
        check(isFollow, Boolean);
        Checker.isUserLoggedIn();
        const school = Checker.isSchool(idSchool);
        if (isFollow) {
            if (!school.followers || school.followers.indexOf(Meteor.userId()) < 0) {

                Schools.update(school._id, {
                    $push: {
                        followers: Meteor.userId()
                    }
                });
            }
        } else {
            if (school.followers && school.followers.indexOf(Meteor.userId()) >= 0) {

                Schools.update(school._id, {
                    $pull: {
                        followers: Meteor.userId()
                    }
                });
            }
        }

    },
    'school.show_toggle_finished' (idSchool, isFinished) {
        check(isFinished, Boolean);
        Checker.isUserLoggedIn();
        const school = Checker.isSchool(idSchool);

        Schools.update(school._id, {
            $set: {
                finished: isFinished
            }
        });
    },
    'school.show_toggle_incoming' (idSchool, isIncoming) {
        check(isIncoming, Boolean);
        Checker.isUserLoggedIn();
        const school = Checker.isSchool(idSchool);
        if(isIncoming){
            //remove all previous incoming before set the new one
            Schools.update({
                incoming: true
            }, {
                $set: {
                    incoming: false
                }
            });
        }
        Schools.update(school._id, {
            $set: {
                incoming: isIncoming
            }
        });
    }



});