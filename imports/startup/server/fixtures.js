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

    loadAdminUsers() {
        var users = [
            {
                name: "Nicolas LUDOVIC",
                username: "nicolas",
                password: process.env.PASSWORD_1,
                email: "nludovic@simplon.co",
                roles: ['admin']
            },
            {
                name: "Farid HUMBLOT",
                username: "farid",
                password: process.env.PASSWORD_2,
                email: "farid@simplon.co",
                roles: ['admin']
            },
            {
                name: "Armand DENISET",
                username: "armand",
                password: process.env.PASSWORD_3,
                email: "adeniset@simplon.co",
                roles: ['admin']
            },
        ];

        _.each(users, function (user) {
            var id;

            id = Accounts.createUser({
                email: user.email,
                username: user.username,
                password: user.password,
                profile: {
                    name: user.name
                }
            });

            if (user.roles.length > 0) {
                // Need _id of existing user record so this call must come
                // after `Accounts.createUser` or `Accounts.onCreate`
                Roles.addUsersToRoles(id, user.roles, 'default-group');
            }

        });
    }
}
export const fixtures = new Fixtures();