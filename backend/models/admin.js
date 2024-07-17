

const mongoose = require('mongoose');

// Define the schema
const AdminSchema = new mongoose.Schema({
    username: {
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

const AdminModel = mongoose.model("admin", AdminSchema);

module.exports = AdminModel;
