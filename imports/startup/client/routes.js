import { Meteor } from 'meteor/meteor';
/**
 * List all routes
 */
Router.configure({
	  loadingTemplate: 'loading'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController'
});
Router.route('/login', {
  name: 'login',
  controller: 'LoginController'
});
Router.route('/logout',function(){
  
  Meteor.logout();
  Router.go('/login');
});
Router.route('/school/show/:id', {
  name: 'school.show',
  controller: 'SchoolController'
});
Router.route('/credits', {
  name: 'credits'
});

Router.route('/admin/school/update/:id', {
  name: 'admin.school.update',
  controller: 'AdminSchoolUpdateController'
});
/**
 * Add Routes checking
 */
const mustBeSignedIn = function () {

  if (!Meteor.userId()) {
    // if the user is not logged in, go to the login page
    Router.go('login');
  } else {
    // otherwise don't hold up the rest of hooks or our route/action function
    // from running
    this.next();
  }
}

const mustBeAdmin = function () {
  if (!Meteor.userId()) {
    // if the user is not logged in, go to the login page
    Router.go('login');
  } else {
    // otherwise don't hold up the rest of hooks or our route/action function
    // from running
    this.next();
  }
} 

const goHome = function () {
  if (Meteor.user()) {
     Router.go('home');
  } else {
    //  this.next();  
  }
};
/** Ensure for all routes the user must be log in */
Router.onBeforeAction(mustBeSignedIn, {
  except: ['login']
});
/** Redirect on successful login */
Router.onAfterAction(goHome, {
  only: ['login']
});

Router.onAfterAction(goHome, {
  only: ['logout']
});