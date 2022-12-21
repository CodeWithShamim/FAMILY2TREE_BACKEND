const mongoose = require("mongoose");

const familySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    relationships: [{
        type: String,
        required: true
    }],
    members: [{
        type: String,
        required: true
    }],
    
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

}, { timestamps: true });

const Family = mongoose.model("Family", familySchema);
module.exports = Family;