brew install postgresql;
psql postgres -c "CREATE USER database_tutorial WITH PASSWORD 'supersecret';";
psql postgres -c "CREATE DATABASE database_tutorial;";
psql postgres -c "GRANT ALL PRIVILEGES ON DATABASE database_tutorial to database_tutorial;";
psql postgres -c "CREATE TABLE thought ( person VARCHAR (50) NOT NULL, message VARCHAR (255) NOT NULL);";
