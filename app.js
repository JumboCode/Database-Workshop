
//
// app.js
//

const http = require('http');
const express = require('express');
const pgp = require('pg-promise')(/*options*/);


const bodyParser = require('body-parser');


const app = express()
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

var cn = {
    host: 'localhost', // server name or IP address;
    port: 5432,
    database: 'database_tutorial',
    user: 'database_tutorial',
    password: 'supersecret'
};


app.set('view engine', 'pug')

var db = pgp(cn); // database instance;

//
// API ENDPOINTS
//

app.get('/', function (req, res) {
  res.send('Your Database Tutorial Server is Running Correctly! Navigate to /table to continue!')
});


app.get('/table', function (req, res) {

  // select and return user name from id:
  db.any('SELECT * FROM thought')
    .then(function(data) {
        console.log(data);
        res.render('index', { thoughts: data})

      })
    .catch(error => {
        console.log("Error");
        res.send(error); // print the error;
    });
});



app.post('/add', function (req, res) {

  var person = req.body.person;
  var thought = req.body.thought;

  // Insert new RECORD into TABLE thought
  // If Sucessful Insertion / Redirect to List Page
   
  db.one("INSERT INTO thought(person, message) VALUES ($1, $2) RETURNING person", [person, thought])
    .then(function(data) {
        console.log(data);
        res.redirect('/table')
      })
    .catch(error => {
        console.log(error);
        res.send(error); // print the error;
    });
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`))
