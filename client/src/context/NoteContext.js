import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const NoteContext = React.createContext()

export const NoteContextProvider = ({ children }) => {

    const [noteState, setNoteState] = useState([])

    const lengthOfList = noteState.length

    useEffect(async () => {
        await axios.get('http://localhost:5001/notes')
                .then((res) => {
                    const data = res.data
                    setNoteState((prevState) => ([...prevState], data))
                })
                .catch((error) => console.error(error))
    }, [noteState])
    
    const value = {
        noteState,
        lengthOfList
    }
    
    return (
        <NoteContext.Provider value={value}>
            {children}
        </NoteContext.Provider>
    )
}