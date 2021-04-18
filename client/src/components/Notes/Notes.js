import React, { useState } from 'react'
import axios from 'axios'

import { NoteContext } from '../../context/NoteContext'

const Posts = () => {

    const { noteState, lengthOfList } = React.useContext(NoteContext)
    const [noteBody, setNoteBody] = useState({
        title: '',
        noteContent: ''
    })

    const noteList = (
        noteState.map((note) => {
            return (
                <div className="notesList" key={note._id}>
                    <h1 className="noteTitle">{note.title}</h1>
                    <h3 className="noteContent">{note.noteContent}</h3>
                </div>
            )
        })
    )

    const inputControl = (e) => {
        e.persist()
        const { name, value } = e.target
        setNoteBody((prevState) => ({ ...prevState, [name]: value }))
    }

    const createNote = async (title, noteContent, e) => {
        await axios.post('http://localhost:5001/notes/new', {
            title,
            noteContent
        })
                .then((res) => {
                    console.log(res.data)
                })
    }

    return (
        <div className="wrapper">
            <div className="notes-wrapper">
                <h2 className="main-title">❤ Notes Manager ❤</h2>
                <div className="input-notes">
                    <form className="form-input">
                        <input className="noteTitleInput" onChange={inputControl} type="text" value={noteBody.title} name="title" placeholder="Enter your note title.." />
                        <input className="noteContentInput" onChange={inputControl} type="text" value={noteBody.noteContent} name="noteContent" placeholder="Enter your note description.." />
                        <input className="noteButton" type="button" value="Add to list" onClick={() => createNote(noteBody.title, noteBody.noteContent)} />
                    </form>
                </div>
                {!lengthOfList ? <h3 className="empty-notesList">There are no notes yet. 😔</h3> : noteList}
            </div>
        </div>
    )
}

export default Posts
