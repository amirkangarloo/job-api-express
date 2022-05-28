'use strict'

const express = require('express')
const app = express()


// middleware
app.use(express.json())



module.exports = async (port) => {
    try {
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        })
    } catch (error) {
        console.log(error);
    }
}