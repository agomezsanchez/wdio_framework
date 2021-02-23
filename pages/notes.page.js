const Page = require ('../pages/page');
const _ = require ('lodash');

class NotesPage extends Page {
    // define locators
    get textNotesHeader () { return $('#my-notes-page')}
    get btnAddNote () { return $('.btn-primary')}
    get txtAddNoteHeader () { return $('#ad-note-page')}
    get txtTitle () { return $('[name="note.title"]')}
    get txtDescription () { return $('[name="note.description"]')}
    get txtSavedNoteTitle () { return $('.list-group-item-heading')}
    get txtSavedNoteText () { return $('.list-group-item-text')}

    // methods notes
    /**
     * add a note with a give title and description
     * @param {string} NoteTitle note title
     * @param {string} NoteDescription note description
     */
    addNote (NoteTitle, NoteDescription) {
        this.btnAddNote.click ();
        this.txtTitle.setValue (NoteTitle);
        this.txtDescription.setValue (NoteDescription);
        this.btnAddNote.click ();
    }

    /**
     * 
     * @param {*} NoteTitle 
     */
    validateNoteTitle (NoteTitle) {
        // TODO: noteTitle.getText is not a function
        _.each (this.txtSavedNoteTitle, (noteTitle) => {
            console.log (`WATCH HERE:::::> ${noteTitle.getText ()}`);
            let note = noteTitle.getText ();
            console.log (`WATCH HERE (note):::::> ${note}`);
            if (note === NoteTitle) {
                true;
            }
        });
    }

    /**
     * 
     * @param {*} NoteDescription 
     */
    validateNoteText (NoteDescription) {

        _.each (this.txtSavedNoteTitle, (noteTitle) => {
            let note = noteTitle.getText ();
            if (note === NoteTitle) {
                true;
            }
        });
    }

}

module.exports = new NotesPage ();