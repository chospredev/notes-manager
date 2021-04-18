import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Notes from './Notes/Notes'
import Note from './Note/Note'

const App = () => {

    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Notes} />
                <Route path="/singular-post" component={Note} /> 
            </Switch>
        </Router>
    )
}

export default App
