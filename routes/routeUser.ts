let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let User = require('../models/modelUser')
// let User = mongoose.model('User');


//User Data Model
// let User = mongoose.model('User', {
//   email: String,
//   password: String,
//   date_created: Date,
//   date_deleted: {
//     type: Date,
//     default: null
//   }
// })

//Creating user data
// router.post('/users', (req, res, next) =>{
//   let new_user = new User ({
//     email: req.body.email,
//     password: req.body.password,
//     date_created: new Date()
//   });
//
//   new_user.save((err, user) => {
//     if(err) {
//       console.log(err);
//     } else {
//       console.log(user);
//     }
//     res.send(user);
//   })
// })

router.post('/register', function(req, res, next) {
    let user:any = new User();
    user.email = req.body.email;
    let setPassword = user.setPassword(req.body.password);
    user.passwordHash = setPassword.passwordHash;
    user.salt = setPassword.salt;
    console.log(`???????????????? ${user}`)
    user.save(function(err, user) {
        if(err) return next(err);
        res.send("Registration Complete. Please login.");
    });
});

router.post('/login', (req, res, next ) => {
  console.log("this is before the if statement")
  if(!req.body.email || !req.body.password) return res.status(400).send("Please fill out every field");
  console.log("this is after the if statemnet")
  passport.authenticate('local', (err, user, info) => {
        console.log(user);
        if(err) return next(err);
        if(user) return res.json({token : user.generateJWT()});
        return res.status(400).send(info);
    })(req, res, next);
})

export = router;
