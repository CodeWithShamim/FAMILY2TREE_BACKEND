const mongoose = require("mongoose");

const childSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },

    dob: Date,
    birthplace: String,
    address: String,
    email: String,
    Phone: String,
    anniversary: Date,
    notes: String,
    deathTime: Date,
    deathPlace: String,
    deathRestingPlace: String,
    deathCertificate: String,
});

const Child = mongoose.model("Child", childSchema);
module.exports = Child;