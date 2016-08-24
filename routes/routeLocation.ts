let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Spot = require('../models/modelLocation')
let User = require('../models/modelUser')

//Gelocation Data Model
// let Geocoord = mongoose.model('Geocoord', {
//   longitude: Number,
//   latitude: Number,
//   date_created: Date,
//   date_deleted: {
//     type: Date,
//     default: null
//   }
// })


//Create geolaction data and form data
router.post('/routeLocation', function(req, res, next) {
  console.log(`RAWWWWWWWWWR ${req.body.email}`)
  let geoCoords = new Spot({
    name: req.body.name,
    description: req.body.description,
    discovered: req.body.discovered,
    longitude: req.body.longitude,
    latitude: req.body.latitude,
    date_created: new Date()
  });

//Update data and spot
router.put('routeLocation/:id', (req, res, next) => {
  console.log(req.body.id + 'THIS IS ID IN ROUTE')
  User.findByIdAndUpdate(req.body.id, {$set: {name: req.body.name, description: req.body.description, discovered: req.body.discovered}}, (err, res) => {
    if(err) {
      console.log(err);
    } else {
      console.log(res);
    }
  })

  res.send(':D');
});

/* delete movie by id */
router.delete('routeLocation/:id', (req, res, next) => {
  let id = req.params['id'];
  User.findByIdAndUpdate(id, { $set: {date_deleted: new Date()}}, (err, res) => {
    if(err) {
      console.log(err + 'NOTICE MEEEEEEEEEEEEEEE');
    } else {
      console.log(res);
    }
  })
  
  res.sendStatus(200);
});




  User.findOne({email: req.body.email}, (err, user) => {
    if(err) {
      res.send(err);
    }

    if(user) {
      let spotArray = user.spot;
      spotArray.push(geoCoords);
      user.spot = spotArray;
      user.save((err, user) => {
        if(err) {
          res.send(err)
        }
      })
    }
  })

  // User.find({email: req.body.email})
  // .then((user) => {
  //   console.log(user)
  //   // user.spot.push(geoCoords)
  // })

  geoCoords.save(function(err, location) {
       if(err) return next(err);
       res.send("This location has been added");
   });

});

router.get('/routeLocation', function(req, res, next) {
  Spot.find({dateDeleted: null}).then((spot)=>{
    console.log("Spot info", spot)
    res.json(spot);
  })
});



//
//   geo_coords.save((err, res) => {
//     if(err) {
//       console.log(err);
//     } else {
//       console.log(res);
//     }
//   })
//
//   res.sendStatus(200);
// });

export = router;
