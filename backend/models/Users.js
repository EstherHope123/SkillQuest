const mongoose = require('mongoose');

// Define the schema
const StudentSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true 
    },
    lastname: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true,
        unique: true 
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true // Adds createdAt and updatedAt fields
});

const StudentModel = mongoose.model("Student", StudentSchema);

module.exports = StudentModel;
