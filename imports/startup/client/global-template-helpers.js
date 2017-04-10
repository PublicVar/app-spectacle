import {
    Template
} from 'meteor/templating';
// import '../../lib/moment/locale/fr';
Template.registerHelper('currentUserId', () => {

    return Meteor.userId();

});

Template.registerHelper('isUserFollowTheSchool', function (userId, school) {
    if (school && school.followers && school.followers.indexOf(userId) >= 0) {
        return true;
    }
    return false;
});

Template.registerHelper('dateHour', function (date) {
   
    return moment(date).format('HH:mm');
});
Template.registerHelper('isUserFollowed', function (userId, followers) {
   console.log(userId);
   console.log(followers);
    return followers.indexOf(userId) > -1 ? true: false;
});
