import jwt from 'jsonwebtoken';


export const verifyToken = (req, res, next) => {
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(' ')[1];
        try {
            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
            req.userId = decoded.id;
            next();
        } catch (error) {
            
            res.status(403).json({
                message: 'You are not authorized to access'
            })
        }
}