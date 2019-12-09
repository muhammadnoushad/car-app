const express = require('express');
require('dotenv/config');
const mongoose = require('mongoose');
const cors = require('cors');

const app=express();
// express.json()

app.use(cors());
app.use(express.json());

const posts = require('./routes/api/posts');
app.use('/api/posts',posts);

//connect to database
mongoose.connect(process.env.DB_CONNECTION,
        {useUnifiedTopology: true,
            useNewUrlParser: true},()=>console.log("Db is connected"));


//handle production
if (process.env.NODE_ENV === 'production') {
    // Static folder
    app.use(express.static(__dirname + '/public/'));
  
    // Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
  }

///connect to port
const port = process.env.port || 5000;
app.listen(port,()=>console.log(`server started on ${port}`));
    

