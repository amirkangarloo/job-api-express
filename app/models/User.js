'use strict'

const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 50,
        required: [true, "Name field is empty"]
    },
    email: {
        type: String,
        required: [true, "Email field is empty"],
        unique: true,
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please enter valid email address"
        ]
    },
    password: {
        type: String,
        required: [true, "Password field is empty"]
    }
})


// mongoose middleware

// hashed password before saveing in DB
userSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

// compare password
userSchema.methods.comparePassword = async function (plainPasssword) {
    const isMatch = await bcrypt.compare(plainPasssword, this.password)
    return isMatch
}

// create token
userSchema.methods.createJWT = function () {
    return jwt.sign({
        userId: this._id,
        name: this.name
    }, process.env.APP_SECRET, {
        expiresIn: process.env.JWT_LIFE_TIME
    })
}


module.exports = mongoose.model('User', userSchema)