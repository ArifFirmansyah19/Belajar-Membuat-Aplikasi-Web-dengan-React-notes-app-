import React from "react";
import DeleteButton from "./DeleteButton";


function NoteItem ({id, title, createdAt, body, onDelete}){
    return(
        <div className="note-item">
            <h2 className="note-item_title">{title}</h2>
            <h5 className="note-item_createdAt">{createdAt}</h5>
                <div className="note-body">
                    <p className="note-item_body">{body}</p>
                </div>
                    <DeleteButton id={id} onDelete={onDelete}/>
        </div>
    );
}

export default NoteItem;