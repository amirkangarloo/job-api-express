'use strict'

const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
    company: {
        type: String,
        required: [true, 'Please provide company name'],
        maxlength: 100
    },
    position: {
        type: String,
        required: [true, 'Please provide position'],
        maxlength: 150
    },
    status: {
        type: String,
        enum: ['interview', 'declined', 'pending'],
        default: 'pending'
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide user']
    }
}, {
    timestamps: true
})


module.exports = mongoose.model('Job', jobSchema)