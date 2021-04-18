const express = require('express');
const Note = require('../models/Note');

const router = express.Router();

router.get('/notes', async (req, res) => {
    
    const allNotes = await Note.find();
    
    try {
        res.status(200).json(allNotes);
    } catch (error) {
        res.json({ message: error });
    }

});

router.post('/notes/new', async (req, res) => {

    const newNote = Note({
        title: req.body.title,
        noteContent: req.body.noteContent
    });

    try {
        const note = await newNote.save();
        res.status(201).json(note);
    } catch (error) {
        res.json({ message: error });
    }

})

module.exports = router;