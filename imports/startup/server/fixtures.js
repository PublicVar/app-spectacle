import {
    Schools
} from '../../api/schools/schools';
/**
 * Load some fixtures in database
 */
class Fixtures {
    /**
     * Load schools
     */
    loadSchools() {
        if (Schools.find().count() === 0) {
            const schools = [{
                    name: "Ary Payet"
                },
                {
                    name: "Raphaël Vidot"
                },
                {
                    name: "La Cressionière"
                }
            ];
            schools.forEach((school) => Schools.insert(school));
        }
    }
}
export const fixtures = new Fixtures();
