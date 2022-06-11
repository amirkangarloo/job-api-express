# Job API Express
Job API for NodeJS, Express and MongoDB.

## REST API

| **HTTP Method**  | **Route**  | **Result**  |
| :------------: | :------------: | :------------: |
|  POST |  /api/v1/auth/register |  Create a new user and Get JWT token |
|  POST |  /api/v1/auth/login |  Get JWT token |
| GET  |  /api/v1/jobs |  Get All jobs|
| POST  |  /api/v1/jobs |  Create a new job |
| GET  |  /api/v1/jobs/:jobId |  Get job data |
|  PATCH |  /api/v1/jobs/:jobId |  Update job data |
|  DELETE |  /api/v1/jobs/:jobId |  Delete job |

## .env file
Create a **.env** file like the below structure. (also you can use **.env.expample** file)

    # === App ===
    APP_URL=http://localhost:5000
    APP_PORT=5000
    APP_SECRET=Enter_Secret_Key
    
    # === MongoDB ===
    MONGO_URL=mongodb://localhost:27017
    MONGO_PORT=27017
    MONGO_USERNAME=
    MONGO_PASSWORD=
    MONGO_DB_NAME=job-api-express

## Installation


**First step**
```javascript
git clone https://github.com/amirkangarloo/job-api-express.git
```

**Second step**

```javascript
npm install
```

**Third step**

Create a [**.env** file](https://github.com/amirkangarloo/job-api-express#env-file).


**Fourth step**
```javascript
npm start
```


## Tools
- Node.js 
- Express
- MongoDB
- mongoose (ORM)
- JavaScript (ES6+)
- JWT (jsonwebtoken npm package)
- bcryptjs (for hash password)
- dotenv
- http-status-codes
- cors (for security)
- express-rate-limit (for security)
- helmet (for security)
- xss-clean (for security)
- nodemon (for devDependencies)
