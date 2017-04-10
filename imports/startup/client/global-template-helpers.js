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
    if (followers) {
        return followers.indexOf(userId) > -1 ? true : false;
    }
    return false;
});


Template.listSchools.events({
    'click .follow' (event) {
        let id = $(event.currentTarget).attr('data-id');
        Meteor.call('schools.follow', id, (error, result) => {
            if ($("#messageModal")) {

                if (error) {
                    $("#messageModal #messageModalTitle").html("Avertissez-moi");
                    $("#messageModal #messageModalBody").html("Une erreur s'est produite. Veuillez vérifier votre connexion internet ou réessayer plus tard.");
                    $("#messageModal #messageModalBody").attr('class','alert alert-error');
                } else {
                    $("#messageModal #messageModalTitle").html("Avertissez-moi");
                    $("#messageModal #messageModalBody").html("Vous serez averti avant le commencement du spectacle de cette école.");
                    $("#messageModal #messageModalBody").attr('class','alert alert-success');
                }
                $('#messageModal').modal('toggle');
            }
        });
    },
    'click .unfollow' (event) {
        let id = $(event.currentTarget).attr('data-id');
        Meteor.call('schools.unfollow', id, (error, result) => {
            if ($("#messageModal")) {
                if (error) {
                    $("#messageModal #messageModalTitle").html("Avertissez-moi");
                    $("#messageModal #messageModalBody").html("Une erreur s'est produite. Veuillez vérifier votre connexion internet ou réessayer plus tard.");
                    $("#messageModal #messageModalBody").attr('class','alert alert-error');
                } else {
                    $("#messageModal #messageModalTitle").html("Avertissez-moi");
                    $("#messageModal #messageModalBody").html("<b>Vous ne serez plus averti</b> avant le commencement du spectacle de cette école.");
                    $("#messageModal #messageModalBody").attr('class','alert alert-success');
                }
                $('#messageModal').modal('toggle');
            }
        });
    }

});