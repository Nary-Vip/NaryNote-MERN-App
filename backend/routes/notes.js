const express = require('express');
const Notes = require('../models/Notes');
const router = express.Router();
const fetchUser = require("../middleware/stayLogin");
const { body, validationResult } = require('express-validator');

//Route - 1 - Retreiving notes
router.get('/fetchallnotes', fetchUser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Something gone wrong");
    }

});

//Route - 2 - Adding Notes
router.post('/addnotes', fetchUser, [
    body('title', "Min length is 5").isLength({ min: 3 }),
    body('Description', "Description required"),
], async (req, res) => {

    //return bad req for errors.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { title, description, tags } = req.body;
    try {
        let note = new Notes({
            title, description, tags, user: req.user.id
        })
        const savedNotes = await note.save();
        res.json(savedNotes);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Something gone wrong");
    }
})

//Route - 3 - Editing Notes
router.put('/editnotes/:id', fetchUser, async (req, res) => {

    //return bad req for errors.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { title, description, tags } = req.body;
    try {
        let newNote = {};
        if(title){
            newNote.title = title;
        }
        if(description){
            newNote.description = description;
        }
        if(tags){
            newNote.tags = tags;
        }
        //Find the note to be updated and update it
        let note = await Notes.findById(req.params.id);
        if(!note){
            return res.status(404).send("Not Found");
        }

        if(note.user.toString()!== req.user.id){
            return res.status(401).send("Unauthorised");
        }

        note = await Notes.findByIdAndUpdate(req.params.id, {$set: newNote}, {new:true});
        res.json(note);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Something gone wrong");
    }
})

//Route - 4 - Deleting Notes
router.delete('/deletenotes/:id', fetchUser, async (req, res) => {

    //return bad req for errors.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    try {
        //Find the note to be updated and update it
        let note = await Notes.findById(req.params.id);//noteId
        if(!note){
            return res.status(404).send("No such Note Found");
        }

        if(note.user.toString()!== req.user.id){
            return res.status(401).send("Unauthorised");
        }

        note = await Notes.findByIdAndDelete(req.params.id);
        res.json({Delete: "Done"});
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Something gone wrong");
    }
})

module.exports = router;