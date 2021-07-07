const db = require("../models");
const config = require("../config/authConfig.js");
const User = db.user;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    user_id: req.body.user_id,
    username: req.body.username,
    email: req.body.email,
    admin: req.body.admin,
    password: bcrypt.hashSync(req.body.password, 8)
  }).catch(err => {
      res.status(500).send({ message: err.message });
    }).then(
        res.send({ message: "User was registered successfully!" })
      );
};

exports.changepassword = (req, res) => {

  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.newPassword,
        user.password
      );

      if (passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Same Password!"
        });
      }

      if (!passwordIsValid) {
      user.update({
        password: bcrypt.hashSync(req.body.newPassword, 8)
      })
        return res.status(200).send({
          accessToken: null,
          message: "Password changed successfully!"
        });
      }

    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

  // User.findOne({
  //   where: {
  //     username: req.body.username
  //   }
  // })
  // .then(()=>{
  //   res.status(200).send({message: '123'})}
  // );
    // .then(user => {
    //   user.update({
    //     password: bcrypt.hashSync(req.body.password, 8)
    //   }).catch(err => {
    //     res.status(500).send({ message: err.message });
    //   }).then(
    //       res.send({ message: "Details changed successfully!" })
    //     );
    //   })    .then(user => {
    //       return res.status(4300).send({ message: "User Not found." });
    //     })
    // };

exports.signin = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.user_id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });
  
      res.status(200).send({
        admin: user.admin,
        password: user.password,
        id: user.user_id,
        username: user.username,
        email: user.email,
        accessToken: token
      })

    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};