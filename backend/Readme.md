# PostApi-Backend
The backend of PostApi will save the posts and will send them to the frontend. The serve use the library expressjs.
## Getting Started
### Prerequisites
```
    nodejs
    postgres
    knex
```
### Instalation
Enter the backend folder.
```
    npm i
```
Put the data in file .envfile, then rename the file to .env.
```
    db: {
        host : '127.0.0.1',
        port: 5432,
        database: '',
        user: '',
        password: ''
    }
```
### Running the tests
```
    npm start
```
## Authors
* **Lucas Ribeiro** - [Lucas](https://github.com/lucasnetwork)