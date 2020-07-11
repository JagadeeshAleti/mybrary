const mongoose = require('mongoose')

const Author = mongoose.model('Author', {
    name: {
        type: String,
        required: true
    }
})

module.exports = Author