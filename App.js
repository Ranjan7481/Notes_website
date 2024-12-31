const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let notes = [];

//- Add a new note
app.post('/Addnotes', (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ message: 'Title and description are required' });
    }
    const newNote = { id: notes.length + 1, title, description };
    notes.push(newNote);
    res.status(201).json(newNote);
});

//  - Fetch all notes
app.get('/Viewnotes', (req, res) => {
    res.json(notes);
});




// Start server

app.listen(8080, () => {
    console.log("server start on port 8080");
});
