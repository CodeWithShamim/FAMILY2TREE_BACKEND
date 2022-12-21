const Family = require("../models/Family");
const catchAsync = require("../utils/catchAsync");

module.exports.addFamily = catchAsync(async (req, res, next) => {
    await Family.create(req.body);
    
    res.status(201).json({
        success: true,
        message: "Family successfully added!",
    });
});