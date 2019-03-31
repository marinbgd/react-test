export const usernameValidation = value => {
    return !value || value.length < 3 || value.length > 30 ? 'username' : null;
};
