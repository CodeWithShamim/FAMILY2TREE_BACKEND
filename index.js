const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("dotenv").config();
const cors = require("cors");
const colors = require("colors");

const database = require("./utils/database");
const familyRoute = require("./routes/family.route")
const errorController = require("./controllers/error.controller");

app.use(express.json());
app.use(cors());
database();

app.get("/", (req, res) => {
    res.send("Server running...");
});

app.use("/api/family", familyRoute)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`.yellow.bold);
});

app.use(errorController);
process.on("unhandledRejection", (error) => {
    console.log("Global error, ", error.name, error.message);
});