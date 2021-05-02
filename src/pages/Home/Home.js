import React, { useState } from "react";
import "./Home.css";
import Note from "../../componentes/Note/Note";
import { Modal } from '@material-ui/core';
import NoteModal from "../../componentes/NoteModal/";
const _notes=[
    {
        id:1,
        title:"Maguinho",
        description:"arrasa"
    },
    {
        id:2,
        title:"Sistemas Digitais",
        description:"chora com o Adriano"
    },
    {
        id:3,
        title:"PDS II",
        description:"Fernando chatão"
    },
    {
        id:5,
        title:"Circuitos 1",
        description:"João deita demais"
    },
    {
        id:4,
        title:"FundMec",
        description:"NIguém realmente gosta, mas é a vida"
    },
    {
        id:6,
        title:"Cálculo 2",
        description:"melhor cálculo"
    },
    {
        id:7,
        title:"Eletromag",
        description:"Matéria top, mas não entendi muita coisa"
    },
    {
        id:8,
        title:"Banco de dados",
        description:"matéria que parece ser legal"
    },
    {
        id: 9,
        title:"EDA",
        description:"Só focar na formula"
    }
];
function Home(){
    const [viewNote,setViewNote]=useState();
    const [notes,setNotes]= useState(_notes);
    function handleClick(note){
        setViewNote(note);
    }
    function handleClose(){
        setViewNote();
    }
    function handleSave(note){
        const newNotes=[...notes];
        let i=0;
        for (i; i < notes.length; i++) {
            if(notes[i].id === note.id){
                break;
            }
        }
        newNotes[i]=note;
        setNotes(newNotes);
    }
    return(
        <>
            <div className="noteContainer">
                {notes.map(note =>(
                <Note key={note.id} note={note} onClick={()=>handleClick(note)}/>
                ))}
            </div>
            <Modal open ={viewNote} onClose={handleClose} className="modalStyle">
                <NoteModal note={viewNote} onClose={handleClose} onSave={handleSave}></NoteModal>
            </Modal>
        </>
    );
}
export default Home;