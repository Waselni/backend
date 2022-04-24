### Getting started

1. Install Nodejs LTS version 16.14.2

   1.1 windows https://nodejs.org/dist/v16.14.2/node-v16.14.2-x86.msi

- Run `npm ci` in project directory to install dependencies
- Copy `.env.example` file as `.env` in project directory and fill in environment variables

- [Optional] Run `npm run db migrate:latest` to get latest database migrations
- then `npm run db seed:run`

- Run `npm start` to run project

### Documentation

- Knex query builder - https://knexjs.org
- Objection ORM - https://vincit.github.io/objection.js/
- Express - https://expressjs.com/en/4x/api.html
- Article https://dev.to/carminezacc/user-authentication-jwt-authorization-with-flutter-and-node-176l
