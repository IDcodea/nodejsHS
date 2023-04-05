exports.userController = (req, res, next) => {
    res.send({
        message: `response api`,
        nama: `aris munandar`,
        asal: `lampung`
    });
};