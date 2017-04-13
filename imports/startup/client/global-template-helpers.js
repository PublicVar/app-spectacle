import {
    Template
} from 'meteor/templating';

import MessageModalBehavior from '../../ui/components/message-modal/message-modal';
Template.registerHelper('currentUserId', () => {

    return Meteor.userId();

});

Template.registerHelper('isUserFollowTheSchool', function (userId, school) {
    if (school && school.followers && school.followers.indexOf(userId) >= 0) {
        return true;
    }
    return false;
});

Template.registerHelper('isShowFinished', function (school) {
    if (school && school.finished) {
        return true;
    }
    return false;
});

Template.registerHelper('isShowIncoming', function (school) {
    if (school && school.incoming) {
        return true;
    }
    return false;
});

Template.registerHelper('dateHour', function (date) {

    return moment(date).tz("Indian/Reunion").format('HH:mm');
});
Template.registerHelper('isUserFollowed', function (userId, followers) {
    if (followers) {
        return followers.indexOf(userId) > -1 ? true : false;
    }
    return false;
});


Template.listSchools.events({
    'click .follow' (event) {
        let id = $(event.currentTarget).attr('data-id');
        Meteor.call('schools.toggle_follow', id,true, (error, result) => {
            MessageModalBehavior.displayMessageFollow(error);
        });
    },
    'click .unfollow' (event) {
        let id = $(event.currentTarget).attr('data-id');
        Meteor.call('schools.toggle_follow', id,false, (error, result) => {
            MessageModalBehavior.displayMessageUnfollow(error);
        });
    }

});