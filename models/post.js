const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, // refer to the user schema
        ref: 'User' // refer to which schema
    }
}, {
    timestamps: true
})