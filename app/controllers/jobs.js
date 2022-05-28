'use strict'

const getAllJobs = async (req, res, next) => {
    res.send('get all jobs')
}

const getJob = async (req, res, next) => {
    res.send('get job')
}

const createJob = async (req, res, next) => {
    res.send('create job')
}

const updateJob = async (req, res, next) => {
    res.send('update job')
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