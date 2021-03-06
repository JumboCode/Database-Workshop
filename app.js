//
// app.js
//

const http = require("http");
const express = require("express");
const pgp = require("pg-promise")(/*options*/);

const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

// Database Configuration Information
// Don't keep password in plaintext for production code!!

var cn = {
  host: "localhost", // server name or IP address;
  port: 5432,
  database: "jumbocode_workshop_db",
  user: "jumbocode_workshop_user"
};

app.set("view engine", "pug");

var db = pgp(cn); // database instance;

//
// API ENDPOINTS
//

app.get("/", function(req, res) {
  res.send(
    "Your Database Tutorial Server is Running Correctly! Navigate to /table to continue!"
  );
});

app.get("/table", function(req, res) {
  // Return all records from database
  db.any("SELECT * FROM thoughts")
    .then(function(data) {
      console.log(data);
      res.render("table", { thoughts: data });
    })
    .catch(error => {
      console.log({ error });
      res.send(error);
    });
});

app.post("/add", function(req, res) {
  var person = req.body.person;
  var thought = req.body.thought;

  // Insert new RECORD into TABLE thought
  // If Sucessful Insertion / Redirect to table

  db.one(
    "INSERT INTO thoughts(persons, message) VALUES ($1, $2) RETURNING person",
    [person, thought]
  )
    .then(function(data) {
      console.log(data);
      res.redirect("/table");
    })
    .catch(error => {
      console.log(error);
      res.send(error); // print the error;
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
