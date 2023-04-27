const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const validateToken = asyncHandler(async (req, res, next) => {
    let token;
    let authHandler = req.headers.authorization || req.headers.Authorization;

    if (authHandler && authHandler.startsWith('Bearer')) {
        token = authHandler.split(' ')[1];
        if(!token){
            res.status(400);
            throw new Error('missing token');
        }

        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                res.status(401);
                throw new Error('user is Not authorized');
            }
            req.user = decoded.user;
            next();
        });
    }
    
});

module.exports = validateToken;