## Creating The DB

Use the `psql -U development` command to login to the PostgreSQL server with the username `development` and the password `development`. This command **MUST** be run in a vagrant terminal, we are using the PostgreSQL installation provided in the vagrant environment.

Create a database with the command `CREATE DATABASE habit_tracker;`.

Copy the `.env.example` file to `.env.development` and fill in the necessary PostgreSQL configuration. The `node-postgres` library uses these environment variables by default.

Create tables by using `npm run reset` which will delete the tables if they exist and readd them.

## JWT Tokens

Create a `.env` file in the root directory, and then populate it with the tokens that will be sent to you via discord. this is necessary for the login functionality to operate. 

# Starting the server

Begin by typing `npm i` to install all dependencies in this repo. then, npm start to run the server. 