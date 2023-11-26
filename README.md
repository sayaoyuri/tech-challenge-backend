# Technical Challenge - Backend API

Technical challenge made in interest of BRUDAM's developer position.

## Deploy
Production API URL: https://tech-challenge-api.onrender.com/

## Documentation
Detailed technical documentation is available on [POSTMAN - Documentation](https://documenter.getpostman.com/view/26857298/2s9YeD9DMS)

## Technologies
This project was built using:

- Node (Version 18.16.1);
- Express - Node framework for building backend API;
- TypeScript - Javascript's superset;
- PostgreSQL - Database;
- Prisma - Database ORM;
- Jest & Supertest - Automated tests;
- Faker - Bias-free test scenarios;
- Joi - Schema validation;
- ESlint + Prettier - Tools for mantaning code pattern.

## How to run for development

1. Clone this repository
2. Install all dependencies

```bash
npm install
```

3. Create a PostgreSQL database with whatever name you want
4. Configure the `.env.development` based on the `.env.example` file
5. Run all migrations

```bash
npm run dev:migration:run
```

5. Run the back-end in a development environment:

```bash
npm run dev
```

## How to run tests

Recommended that you use a different database for testing since it will erase all of database's records.

1. Follow the steps in the last section
2. Configure the `.env.test` file using the `.env.example` file.
1. Run all migrations:

```bash
npm run test:migration:run
```

4. Run test:

```bash
npm run test
```

## Building and starting for production

1. Follow the steps in the How to Run for development section.
2. Configure the `.env` file using the `.env.example` file

3. Run build script:

```bash
npm run build
```

4. Run the back-end in a production environment:

```bash
npm start
```
