//import the template 
import './home';

HomeController = RouteController.extend({
    template: 'home',
    action: function () {
        this.render();
    }
});