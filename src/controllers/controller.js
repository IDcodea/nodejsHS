exports.helloWorld = (req, res, next) => {
    res.send('<h1>Hari Senin</h1>');
};

exports.helloMoto = (req, res, next) => {
    console.log('ini request :>> ', req.query);
    res.send({
        response: req.model
    })
}