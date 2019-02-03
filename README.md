# Database-Workshop
JumboCode Feb 2019 Workshop on Databases



# Getting Started



1. Install postgres with `brew install postgres`
2. Create user with command `psql postgres -c "CREATE USER database_tutorial WITH PASSWORD 'supersecret';"`
3. Create  Database database_tutorial with command `psql postgres -c "CREATE DATABASE database_tutorial;"`
4. Give permissions to edit the database to the created user `psql postgres -c "GRANT ALL PRIVILEGES ON DATABASE database_tutorial to database_tutorial;"`
5. Create table `psql postgres -c "CREATE TABLE thought ( person VARCHAR (50) NOT NULL, message VARCHAR (255) NOT NULL);"``
6. Insert a test record with `psql postgres -c "INSERT INTO thought VALUES ('spencer', 'Monaco?');"`

# ENV variable to switch between sqllite driver and postgres
