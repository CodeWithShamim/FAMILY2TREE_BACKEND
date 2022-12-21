module.exports = (fn) => (req, res, next) => {
    fn(req, res, next).catch((err) => {
        return res.status(404).json({ success: false, message: err.message })
    });
};
