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
import './school.html';
import { Mongo } from 'meteor/mongo';

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
      if (error) {
        FlashMessages.sendError("Une erreur s'est produite. Veuillez réessayer plus tard.");
      } else {
        FlashMessages.sendSuccess("Vous suivez cette école.");
      }
    });
  },
  'click .unfollow' (event) {
    var controller = Iron.controller();
    Meteor.call('schools.unfollow', controller.state.get('id'), (error, result) => {
      if (error) {
        FlashMessages.sendError("Une erreur s'est produite. Veuillez réessayer plus tard.");
      } else {
        FlashMessages.sendSuccess("Vous ne suivez plus cette école.");
      }
    });
  }

});