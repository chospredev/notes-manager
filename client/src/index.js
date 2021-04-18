import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import { NoteContextProvider } from './context/NoteContext'
import './index.css'

const root = document.querySelector('#root')

ReactDOM.render(
    <NoteContextProvider>
        <App />,
    </NoteContextProvider>,
    root
)