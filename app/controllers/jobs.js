'use strict'

const Job = require('../models/Job')
const {
    StatusCodes
} = require('http-status-codes')
const {
    BadRequestError,
    NotFoundError
} = require('../errors')

const getAllJobs = async (req, res, next) => {
    try {
        // pagination
        const page = Number(req.query.page) > 1 ? Number(req.query.page) : 1
        const limit = Number(req.query.limit) >= 1 ? Number(req.query.limit) : 10
        const skip = (page - 1) * limit

        const jobs = await Job.find({
            createdBy: req.user.userId
        }, ["company", "position", "status"]).sort('createdAt').limit(limit).skip(skip)

        res.status(StatusCodes.OK).send({
            jobs,
            count: jobs.length
        })
    } catch (error) {
        next(error)
    }
}

const getJob = async (req, res, next) => {
    try {
        const {
            user: {
                userId
            },
            params: {
                jobId
            }
        } = req

        const job = await Job.findOne({
            _id: jobId,
            createdBy: userId
        })

        if (!job) {
            throw new NotFoundError(`No job with id: ${jobId}`)
        }

        res.status(StatusCodes.OK).send(job)

    } catch (error) {
        next(error)
    }
}

const createJob = async (req, res, next) => {
    try {
        req.body.createdBy = req.user.userId
        const newJob = await Job.create(req.body)

        res.status(StatusCodes.CREATED).send(newJob)

    } catch (error) {
        next(error)
    }
}

const updateJob = async (req, res, next) => {
    try {
        const {
            user: {
                userId
            },
            params: {
                jobId
            },
            body
        } = req
        
        const job = await Job.findOneAndUpdate({
                _id: jobId,
                createdBy: userId
            },
            body,
            {
                new: true,
                runValidators: true
            }
        )

        if (!job) {
            throw new NotFoundError(`No job with id: ${jobId}`)
        }

        res.status(StatusCodes.OK).send(job)

    } catch (error) {
        next(error)
    }
}

const deleteJob = async (req, res, next) => {
    res.send('delete job')
}


module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
}