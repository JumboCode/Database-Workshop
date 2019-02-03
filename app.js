const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;


const pgp = require('pg-promise')(/*options*/);

var cn = {
    host: 'localhost', // server name or IP address;
    port: 5432,
    database: 'database_tutorial',
    user: 'database_tutorial',
    password: 'supersecret'
};

var db = pgp(cn); // database instance;

// select and return user name from id:
//db.one("CREATE TABLE thought( FROM users WHERE id = $1", 123)
//    .then(user => {
//        console.log(user.name); // print user name;
//    })
//    .catch(error => {
//        console.log(error); // print the error;
//    });



const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
