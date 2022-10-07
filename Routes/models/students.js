const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const studentSchema = new Schema({
    Firstname: {
        type: String,
        required:[true,'First Name is required']
    },
    Lastname: {
        type: String,
        required:[true,'Last Name is required']
    },
    Gender: {
        type: String
    }

})