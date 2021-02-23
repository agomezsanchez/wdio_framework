const LoginPage = require ('../pages/login.page');
const NotesPage = require ('../pages/notes.page');
const UserData = require ('../data/userData.json');

describe ('Login', () => {

    it ('user login with valid credentials', () => {
        LoginPage.open ();
        LoginPage.navigateToLogin ();
        LoginPage.login (UserData.valid_user.username, UserData.valid_user.password);
        expect (NotesPage.textNotesHeader).toBeExisting ();
    });
});