import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Template } from 'meteor/templating';

import './admin-school-update-form';
import '../../../components/file-preview/file-preview';

AdminSchoolUpdateController = RouteController.extend({
    template: 'adminSchoolUpdateForm',
    loadingTemplate: 'loading',
    waitOn: function() {
        return Meteor.subscribe('school', this.params.id);
    },
    data: function() {
        return {
            school: Schools.findOne(new Mongo.ObjectID(this.params.id)),
            id: this.params.id
        };
    },
    action: function() {
        this.render();
    }
});
