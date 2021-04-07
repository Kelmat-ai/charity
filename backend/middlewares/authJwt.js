const jwt = require("jsonwebtoken");
const config = require("../config/authConfig.js");
const db = require("../models");
const User = db.user;

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.user_id = decoded.id;
    next();
  });
};

isAdmin = (req, res, next) => {

  User.findByPk(req.user_id).then(() => {
        if (req.admin === true) {
          next();
          return;
      }}
    );

      res.status(403).send({
        message: "Require Admin access!"
      });
      return;

};

const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
};
module.exports = authJwt;