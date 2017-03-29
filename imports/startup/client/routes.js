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
Router.route('/school/follow/:id', {
  name: 'school.follow',
  controller: 'SchoolFollowController'
});
Router.route('/school/unfollow/:id', {
  name: 'school.unfollow',
  controller: 'SchoolUnFollowController'
});



/**
 * Add Routes checking
 */
const mustBeSignedIn = function () {
  if (!Meteor.userId() && Meteor.user()) {
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
    if(Roles.userIsInRole(Meteor.userId(), ['admin'])){
      Router.go('/admin');
    }else{

       Router.go('home');
    }
  } else {


      this.next();
    
  }
};
/** Ensure for all routes the user must be log in */
Router.onBeforeAction(mustBeSignedIn, {
  except: ['login']
});
/** Redirect on successful login */
Router.onBeforeAction(goHome, {
  only: ['login']
});