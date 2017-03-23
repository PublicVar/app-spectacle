//import the template 
import './login';
LoginController = RouteController.extend({
  template: 'login',
  action: function () {
    this.render();
  }
});