module.exports = (req, res, next) => {
    console.log(`${req.body.cliente}`);
    next()
} 