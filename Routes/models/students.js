const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const studentSchema = new Schema({
    firstname: {
        type : String,
        required:[true,'Firstname is required']
    }
})