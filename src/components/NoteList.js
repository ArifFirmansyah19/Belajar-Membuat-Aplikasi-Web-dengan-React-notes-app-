import React from "react";
import NoteItem from "./NoteItem";


function NoteList({notes, onDelete}){
    
    return(
        <div className="note-list">
            <h3>Catatan Aktif</h3>
            {notes.length === 0 ?(
                    <div className="empty-page">
                        <p className="page-empty">Tidak ada catatan</p>
                    </div>
            ) : (
                notes.map((note)=>(
                    <NoteItem
                    key={note.id}
                    id={note.id}
                    onDelete= {onDelete}
                    {...note}
                    />
                )
                ))
            }
        </div>
    )
}

export default NoteList;