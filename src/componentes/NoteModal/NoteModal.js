
import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./NoteModal.css";

function NoteModal({note,onSave,onClose}){
    const[tempNote,setTempNote]= useState({...note});

    function saveNote(){
        onSave({...tempNote});
        onClose();
    }
    function changeTempNote(e,field){
        tempNote[field]= e.target.value;
        setTempNote({...tempNote});
    }
    return(
        <div className="noteModal">
            <input className="noteModalTitle" type="text" onChange={(e) => changeTempNote(e,"title")} value={tempNote.title}></input>
            <textarea className="noteModalDescription" onChange={(e) =>changeTempNote(e,"description")} value={tempNote.description}></textarea>
            <div className="buttonsRow">
                <Button onClick={onClose}>Cancelar</Button>
                <Button variant="contained" color="primary" onClick={saveNote}>Salvar</Button>
            </div>
        </div>
    );
}
export default NoteModal;