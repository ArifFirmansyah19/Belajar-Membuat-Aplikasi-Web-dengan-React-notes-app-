import React from "react";

function DeleteButton ({id, onDelete}){
    return(
        
        <button className="note-item_delete" onClick={()=>onDelete(id)}>Delete</button>
    )
}

export default DeleteButton;