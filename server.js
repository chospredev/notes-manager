const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const notesRouter = require('./routes/Notes');

// App init.
const PORT = process.env.PORT || 5001;
const app = express();

// App middlewares.
app.use(express.json());
app.use(cors());
app.use('/', notesRouter);

// Mongoose init.
mongoose.connect(process.env.CONNECTION_URI, 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }, 
() => console.log(`Mongoose connected successfully.`));

// Start listening app.
// NOTE: Nodemon dev-package works behind the scenes to keep server up and running.

(async () => {
    app.listen(PORT, () => console.log(`Started app at: ${PORT}.`));
})();