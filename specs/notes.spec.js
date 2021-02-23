const LoginPage = require ('../pages/login.page');
const NotesPage = require ('../pages/notes.page');
const UserData = require ('../data/userData.json');

describe ('Notes', () => {
    it ('Add a note', () => {
        LoginPage.open ();
        LoginPage.navigateToLogin ();
        LoginPage.login (UserData.valid_user.username, UserData.valid_user.password);
        NotesPage.addNote ('wizeline', 'wizeline note');
        //TODO: validation wasn't completed
        // expect (NotesPage.validateNoteTitle ('wizeline')).toBeTrue ();
        // expect (NotesPage.validateNoteText ('wizeline note')).toBeTrue ();
    });
});