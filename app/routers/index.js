'use strict'

const authRouter = require('./auth')
const jobsRouter = require('./jobs')
const authenticationMiddleware = require('../middleware/authentication')


module.exports = (app) => {
    app.use('/api/v1/auth', authRouter)
    app.use('/api/v1/jobs', authenticationMiddleware, jobsRouter)
}