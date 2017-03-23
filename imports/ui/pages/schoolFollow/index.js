//import the template 
import './schoolFollow.html';
SchoolFollowController = RouteController.extend({
  template: 'schoolFollow',
  action: function () {
    const id = this.params.id;
    this.render();
  }
});