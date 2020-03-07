
// import express
const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
// permet de définit une variable de connection pour la DB et ne pas monter son mot de passe et user
require('dotenv/config')

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());


//Import Routes
const postsRoute = require('./routes/posts'); // on import le fichier post  qui contient la route


 
//Middlewares in express
app.use(cors()); // permet d'utiliser plusieurs ports de redirection
app.use('/posts', postsRoute); // on utilise la route postRoute que l'on a crée plus haut


// une fonction qui s'execute quand on obtient la route indiqué


//create routes
app.get('/', (req, res) => {
    console.log('routes');

    res.send('home')
})



//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, 
                {useNewUrlParser: true, useUnifiedTopology: true});

// connection to DB
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("connection réussi sur la DB")
});
// attention de cette façon la connexion a la DB peut etre visible avec le mot de passe 


/// listen the server
app.listen(3001);