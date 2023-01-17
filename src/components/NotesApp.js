import React from "react";
import { getInitialData } from "../util/index.js";
import HeaderApp from "./HeaderApp";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

class NotesApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }


    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({notes});
    }


    onAddNoteHandler({title, body}){
        this.setState((previousState)=>{
            return{
                notes: [
                    ...previousState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        archived: false,
                        createdAt: new Date().toISOString(),
                    }
                ],

            }
        });
    }

    render(){
        return(
            <div className="notes-app">
                <HeaderApp onSearch={this.onSearchHandler}/>
                <div className="note-input_table">
                    <h1>Buat catatan</h1>
                    <NoteInput addNote={this.onAddNoteHandler}/>
                </div>
                <NoteList notes = { this.state.notes } onDelete = { this.onDeleteHandler }/>
            </div>
        )
    }
}

export default NotesApp;