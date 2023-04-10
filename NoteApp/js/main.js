import NotesAPI from "./NotesAPI.js";
import NotesView from "./NotesView.js";
// select an element named call element by id is equal app in DOM
const app = document.getElementById("app");
// for use of class NotesView we can instance from itself and we want to show dynamic html page with js so we passed app as parameter to instance view
// we passed object or method to view
const view = new NotesView(app, {
    onNoteAdd() {
        console.log('Note has been added')
    
    },
    onNoteEdit(newTitle, newBody) {
        console.log(newTitle, newBody);
    }, onNoteSelect(noteId) {
        //when user select note=>1.add css class modifier to it,title and body in left side shall be update
        //view.updateActiveNote(note)


        console.log('note id', noteId);
    },
    onNoteDelete(noteId) { 

        console.log('note id for delete', noteId);
    }
});
// show note in updateNoteList method
// we passed object or method to view
view.updateNoteList(NotesAPI.getAllNotes());
view.updateActiveNote(NotesAPI.getAllNotes()[0]);
// console.log(NotesAPI.getAllNotes());