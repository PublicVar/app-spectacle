import {
  Meteor
} from 'meteor/meteor';
import {
  Template
} from 'meteor/templating';


import {
  Schools
} from '../../../api/schools/schools';

//import the template 
import '../../components/loading/loading.html';
import './schoolFollow.html';

/**
 * It's not ideal to have 2 controllers in the same files.
 * BUT : 
 * I tried 1 controller calling a custom Meteor.method to follow/unfollow a school.
 * The Meteor.method added an user to a school as a follower if the user was not and removed
 * him if he was a follower.
 * 
 * The problem is : it goes on inifinite loop !
 * It's because the RouteController.waitOn hook. It reloads the url on every changes on the school colelction! 
 * So when the Meteor.method updated (the user follow the school) the school collection it reloaded the page and when
 * is reloaded it changed again (the user unfollow the school) the school collection and it goes like that again and again.
 * 
 * So, I decided to split the 2 actions follow and unfollow. And because there are pretty similar I kept
 * them in the same files.
 */

SchoolFollowController = RouteController.extend({
  template: 'schoolFollow',
  loadingTemplate: 'loading',
  waitOn: function () {
    return Meteor.subscribe('school', this.params.id);
  },
  data: function () {
    return {
      school: Schools.findOne(this.params.id),
      id: this.params.id
    };
  },
  action: function () {
    Meteor.call('schools.follow',this.params.id);
    this.render();
  }
});

SchoolUnFollowController = RouteController.extend({
  template: 'schoolFollow',
  loadingTemplate: 'loading',
  waitOn: function () {
    return Meteor.subscribe('school', this.params.id);
  },
  data: function () {
    return {
      school: Schools.findOne(this.params.id),
      id: this.params.id
    };
  },
  action: function () {
    Meteor.call('schools.unfollow',this.params.id);
    this.render();
  }
});
