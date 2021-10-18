const jwt = require('jsonwebtoken');
const JWT_sec = "NaryVip";

const fetchUser = (req, res, next)=>{
    //Get the user's toekn from jwt
    const token = req.header("log-token");
    if(!token){
        res.status(401).send({error: "Authentication error"});
    }
    try {
        const data = jwt.verify(token, JWT_sec);
        req.user = data.user;
        next();//calls next function where it is been used.
    } catch (error) {
        res.status(401).send({error: "Authentication error"});
    }

}

module.exports = fetchUser;