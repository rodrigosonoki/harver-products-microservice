import jwt from 'jsonwebtoken'

export default function makeValidateToken(req, res, next) {
    const token = req.header('auth-token')

    if(!token) return res.status(401).json({ msg: "Acesso negado" })

    try {
        const verified = jwt.verify(token, process.env.SECRET_TOKEN)
        req.user = verified;
        next();
    } catch(err) {
        return res.status(400).json({ err})
    }
}