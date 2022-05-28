'use strict'

const express = require('express')
const router = express.Router()
const {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
} = require('../controllers/jobs')


router.get('/', getAllJobs)
router.post('/', createJob)
router.get('/:jobId', getJob)
router.patch('/:jobId', updateJob)
router.delete('/:jobId', deleteJob)


module.exports = router