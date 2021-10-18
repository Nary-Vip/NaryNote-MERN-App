import React from 'react'
import noteContext from '../contexts/notes/NoteContext'

function Noteitem(props) {
    const { title, description, tags } = props.note;
    return (
        <div className="col-md-3 my-3">
            <div className="card">
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                    <i class="fas fa-trash mx-2"></i>
                    <i class="far fa-edit mx-2"></i>
                    <a href="/" class="btn btn-primary">{tags}</a>
                </div>
            </div>
        </div>

    )
}

export default Noteitem
