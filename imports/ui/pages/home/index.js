import {
    Meteor
} from 'meteor/meteor';
import {
    Schools
} from '../../../api/schools/schools';


//import component to use it. otherwise not working
import '../../components/list-schools/list-schools.html';
import '../../components/loading/loading.html';

//import the template 
import './home.html';


HomeController = RouteController.extend({
    // Pass some variable(s) to the view. data could be an object or a function
    data: {
        schools: Schools.find({},{ sort:{ startAt: 1 } })
    },
    waitOn: function () {
        return Meteor.subscribe('schools');
    }
});