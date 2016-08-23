let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Spot = require('../models/modelLocation')

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
  console.log(`RAWWWWWWWWWR ${req.body.discovered}`)
  let geoCoords = new Spot({
    name: req.body.name,
    description: req.body.description,
    discovered: req.body.discovered,
    longitude: req.body.longitude,
    latitude: req.body.latitude,
    date_created: new Date()
  });
  geoCoords.save(function(err, location) {
       if(err) return next(err);
       res.send("This location has been added");
   });

});

router.get('/routeLocation', function(req, res, next) {
  Spot.find({dateDeleted: null}).then((spot)=>{
    console.log("geoCoords from server", spot)
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
