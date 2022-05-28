'use strict'

const authRouter = require('./auth')
const jobsRouter = require('./jobs')


module.exports = (app) => {
    app.use('/api/v1/auth', authRouter)
    app.use('/api/v1/jobs', jobsRouter)
}