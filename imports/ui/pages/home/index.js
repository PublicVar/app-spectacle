import { Schools } from '../../../api/schools/schools';


//import component to use it. otherwise not working
import '../../components/list-schools/list-schools.html';
//import the template 
import './home.html';

HomeController = RouteController.extend({
    template: 'home',
    // Pass some variable(s) to the view. data could be an object or a function
    data: {
        schools: Schools.find({}) 
    },
    action: function () {
        this.render();
    }
});