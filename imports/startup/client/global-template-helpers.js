import {
    Template
} from 'meteor/templating';

Template.registerHelper('currentUserId', () => {

    return Meteor.userId();

});

Template.registerHelper('isUserFollowTheSchool', function (userId, school) {
    if (school && school.followers && school.followers.indexOf(userId) >= 0) {
      return true;
    }
    return false;
  }
);