# Database-Workshop
JumboCode Feb 2019 Workshop on Databases and thoughts.



# Getting Started

1. To get the database up and running, run  `sh setup.sh`

## Application

1. Make sure to have node installed `brew install node` for mac users
2. Install libraries with `npm install`
3. Run the server with `npm run start`



## Steps in Setup.sh

1. Install postgres with `brew install postgres`
2. Create user with command `psql postgres -c "CREATE USER database_tutorial WITH PASSWORD 'supersecret';"`
3. Create  Database database_tutorial with command `psql postgres -c "CREATE DATABASE database_tutorial;"`
4. Give permissions to edit the database to the created user `psql postgres -c "GRANT ALL PRIVILEGES ON DATABASE database_tutorial to database_tutorial;"`
5. Create table `psql postgres -c "CREATE TABLE thought ( person VARCHAR (50) NOT NULL, message VARCHAR (255) NOT NULL);"``
6. Insert a test record with `psql postgres -c "INSERT INTO thought VALUES ('spencer', 'Monaco?');"`


# Helpful postgres queries
  * To wipe out all entries from a table, `DELETE FROM <table-name>`;


# Helpful psql command line interface commands f

  * Connect to a database with `postgres=# \connect <database-name>`
  * List all databases with `postgres=#  \l`
  * List all tables of the connected  database `\dt`
  * Describe a table of the connected database `\d table_name`
