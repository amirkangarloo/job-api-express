'use strict'

const express = require('express')
const router = express.Router()
const methodNotAllowedMiddleware = require('../middleware/methodNotAllowed')
const {
    register,
    login
} = require('../controllers/auth')


router.post('/register', register)
router.post('/login', login)

// Method Not Allowed
router.all('/register', methodNotAllowedMiddleware)
router.all('/login', methodNotAllowedMiddleware)

module.exports = router