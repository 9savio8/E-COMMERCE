const jwt = require('jsonwebtoken');
require('dotenv').config()

function verifyAdmin(req, res, next) {
 // var token = req.header('Authorization');
  //token = token.substring(7, token.length);
  try {
    //const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const role = req.role
    if (role != "admin"){
      console.log("ok");
      res.status(401).json({ message: 'Not authorized' });
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = verifyAdmin;