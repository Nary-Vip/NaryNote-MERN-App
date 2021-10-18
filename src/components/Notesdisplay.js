import React, { useContext } from 'react'
import noteContext from '../contexts/notes/NoteContext';
import Noteitem from './Noteitem'

function Notesdisplay() {
    const context = useContext(noteContext);
    const { notes, setnotes } = context;

    return (
        <>
            <div className="row my-3">
                {notes.map((note) => {
                    return <Noteitem key={note.id} note={note} />
                })}
            </div>
        </>

    )

}

export default Notesdisplay
