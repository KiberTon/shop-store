module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1] // Bearer asdf;lkjasdfl;kj
        if(!token){
            return res.status(401).json({message: 'Не авторизован'})
        }
        const decode = jwt.veryfy(token, process.env.SECRET_KEY)
        req.user = decode
        next()
    } catch (e) {
        res.status(401).json({ message: 'Не авторизован' })
    }
}