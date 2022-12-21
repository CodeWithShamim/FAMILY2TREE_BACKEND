const mongoose = require("mongoose");

module.exports = () => {
    mongoose.connect(process.env.DB_LOCAL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("Database connect success......".red.bold))
        .catch((error) => console.log("Error from database", error.message))
}