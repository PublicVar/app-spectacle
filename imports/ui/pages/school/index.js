import {
  Meteor
} from 'meteor/meteor';
import {
  Mongo
} from 'meteor/mongo';
import {
  Template
} from 'meteor/templating';

import {
  Schools
} from '../../../api/schools/schools';

//import the template 
import '../../components/loading/loading.html';
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
    this.state.set('id', this.params.id);
    this.render();
  }
});

Template.school.events({
  'click .follow' (event) {

    let id = $(event.currentTarget).attr('data-id');
    Meteor.call('schools.toggle_follow', id, true, (error, result) => {
      MessageModalBehavior.displayMessageFollow(error);
    });
  },
  'click .unfollow' (event) {

    let id = $(event.currentTarget).attr('data-id');
    Meteor.call('schools.toggle_follow', id, false, (error, result) => {
      MessageModalBehavior.displayMessageUnfollow(error);
    });
  },
  'click .finished' (event) {
    if (confirm("Êtes-vous sûr que le spectacle de cette école est terminée ?")) {

      let id = $(event.currentTarget).attr('data-id');
      Meteor.call('school.show_toggle_finished', id, true, (error, result) => {
        MessageModalBehavior.displayMessageFinished(error);
      });
    }
  },
  'click .unfinished' (event) {
    if (confirm("Êtes-vous sûr que le spectacle de cette école est en cours ?")) {
      let id = $(event.currentTarget).attr('data-id');
      Meteor.call('school.show_toggle_finished', id, false, (error, result) => {
        MessageModalBehavior.displayMessageUnfinished(error);
      });
    }
  },
  'click .incoming' (event) {
    if (confirm("Êtes-vous sûr que le spectacle pour cette école va commencer ?")) {
      let id = $(event.currentTarget).attr('data-id');
      Meteor.call('school.show_toggle_incoming', id, true, (error, result) => {
        MessageModalBehavior.displayMessageIncoming(error);
      });
    }
  },
  'click .notincoming' (event) {
    if (confirm("Êtes-vous sûr que le spectacle pour cette école ne va pas commencer ?")) {
      let id = $(event.currentTarget).attr('data-id');
      Meteor.call('school.show_toggle_incoming', id, false, (error, result) => {
        MessageModalBehavior.displayMessageNotIncoming(error);
      });
    }
  }

});

Template.school.helpers({
  getContentsTemplate: slug => "contents_" + slug

});