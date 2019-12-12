const express = require('express');
require('dotenv/config');
const mongoose = require('mongoose');
const cors = require('cors');

const app=express();
// express.json()

app.use(cors());
app.use(express.json());

const posts = require('./routes/api/posts');
const provider = require('./routes/api/provider');
const car = require('./routes/api/car');
app.use('/api/posts',posts);
app.use('/api/provider',provider);
app.use('/api/car',car);

//connect to database
mongoose.connect(process.env.DB_CONNECTION,
        {useUnifiedTopology: true,
            useNewUrlParser: true},()=>console.log("Db is connected"));


//handle production//
if (process.env.NODE_ENV === 'production') {
    // Static folder
    app.use(express.static(__dirname + '/public/'));
  
    // Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
  }

///connect to port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));

    

