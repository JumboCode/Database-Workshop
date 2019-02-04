# install psql
# brew install postgresql;

# create user and database
createuser jumbocode_workshop_user
createdb jumbocode_workshop_db

# grant permisions to the user
psql -U $USER -c "grant all privileges on database jumbocode_workshop_db to jumbocode_workshop_user;"

# create the table
psql -U "jumbocode_workshop_user" -d "jumbocode_workshop_db" -c "CREATE TABLE thoughts ( person VARCHAR (50) NOT NULL, message VARCHAR (255) NOT NULL);";
