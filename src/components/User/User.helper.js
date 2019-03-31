import { MANAGER } from './User.roles';

export const isUserManager = (userRoles = []) => {
    return !!~userRoles.indexOf(MANAGER);
};
