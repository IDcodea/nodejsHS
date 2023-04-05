exports.myMiddleware = (req, res, next) => {
    req.model = `ulalala`
    next()
};