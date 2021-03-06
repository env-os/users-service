# User Service

Service for users management.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

```
nodeJS
postgres
```

### Installing

1. Install npm project dependecies

```
npm install
```

## Deployment

1. Install PostgreSQL and configure it

2. Set environments variables
```
PORT // the micro-service port
TYPEORM_CONNECTION = postgres
TYPEORM_DATABASE = users
TYPEORM_ENTITIES = build/entities/**/**.js
TYPEORM_HOST = // host of database
TYPEORM_PASSWORD = // password of database
TYPEORM_PORT = // port of database
TYPEORM_SYNCHRONIZE = true
TYPEORM_USERNAME = // username of database
```
3. Compile Typescript
```
npm run tsc
```
4. Run micro-service
```
node build/app.js
```

## Built With

* [NodeJS](https://nodejs.org/it/)
* [Express](https://expressjs.com/it/)
* [TypeScript](https://github.com/microsoft/TypeScript)

## License

This project is licensed under the GNU License - see the [LICENSE.md](LICENSE.md) file for details
