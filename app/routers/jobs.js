'use strict'

const express = require('express')
const router = express.Router()
const methodNotAllowedMiddleware = require('../middleware/methodNotAllowed')
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

// Method Not Allowed
router.all('/', methodNotAllowedMiddleware)
router.all('/:jobId', methodNotAllowedMiddleware)

module.exports = router