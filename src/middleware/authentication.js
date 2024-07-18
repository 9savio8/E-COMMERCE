const jwt = require('jsonwebtoken');
require('dotenv').config()

function verifyToken(req, res, next) {
  var token = req.header('Authorization');
  token = token.substring(7, token.length);

  if (!token) return res.status(401).json({ error: 'Access denied' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.idUser = decoded.id;
    req.role=decoded.role;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = verifyToken;