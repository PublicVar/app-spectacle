//import the template 
import './login';
LoginController = RouteController.extend({
  template: 'homeLogin',
  action: function () {
    this.render();
  }
});