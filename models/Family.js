const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

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
        type: ObjectId,
        ref: "Child",
        required: true
    }],
}, { timestamps: true });

const Family = mongoose.model("Family", familySchema);
module.exports = Family;