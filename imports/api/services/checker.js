
import {
    Meteor
} from 'meteor/meteor';
import {
    Schools
} from '../schools/schools';
import {
    check
} from 'meteor/check';
class Checker{
    /**
     * Test if user logged in. throw exception if he is not
     */
    isUserLoggedIn(){
        if (!Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }
    }
    /**
     * Test if a school exists an return in the case otherwise throw exception
     * @param idSchool string
     */
    isSchool(idSchool){
        check(idSchool, String);
        idSchool = new Mongo.ObjectID(idSchool);
         //check if school exists
        const school = Schools.findOne(idSchool);

        if (!school) {
            throw new Meteor.Error('not-authorized');
        }
        return school;
    }
}

export default new Checker();