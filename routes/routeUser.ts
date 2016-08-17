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

router.post('/users', function(req, res, next) {
    var user:any = new User();
    user.email = req.body.email;
    user.setPassword(req.body.password);
    user.save(function(err, user) {
        if(err) return next(err);
        res.send("Registration Complete. Please login.");
    });
});

router.post('/users', (req, res, next ) => {
  console.log(req.body);
})

export = router;
