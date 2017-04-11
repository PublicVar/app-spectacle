import {
  Meteor
} from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import {
  Template
} from 'meteor/templating';

import {
  Schools
} from '../../../api/schools/schools';

//import the template 
import '../../components/loading/loading.html';
import './contents/contents.html';
import './school.html';
import MessageModalBehavior from '../../components/message-modal/message-modal';

SchoolController = RouteController.extend({
  template: 'school',
  loadingTemplate: 'loading',
  waitOn: function () {
    return Meteor.subscribe('school', this.params.id);
  },
  data: function () {
    return {
      school: Schools.findOne(new Mongo.ObjectID(this.params.id)),
      id: this.params.id
    };
  },
  action: function () {
    Session
    this.state.set('id', this.params.id);
    this.render();
  }
});

Template.school.events({
  'click .follow' (event) {
    var controller = Iron.controller();

    Meteor.call('schools.follow', controller.state.get('id'), (error, result) => {
      MessageModalBehavior.displayMessageFollow(error);
    });
  },
  'click .unfollow' (event) {
    var controller = Iron.controller();
    Meteor.call('schools.unfollow', controller.state.get('id'), (error, result) => {
      MessageModalBehavior.displayMessageUnfollow(error);
    });
  }

});

Template.school.helpers({
  getContentsTemplate: slug => "contents_"+slug
 
});