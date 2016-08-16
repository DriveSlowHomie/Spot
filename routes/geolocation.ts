let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//model movie
let Geocoord = mongoose.model('Geocoord', {
  longitude: Number,
  latitude: Number,
  date_created: Date,
  date_deleted: {
    type: Date,
    default: null
  }
})

router.post('/geolocation', function(req, res, next) {
  let geo_coords = new Geocoord({
    longitude: req.body.longitude,
    latitude: req.body.latitude,
    date_created: new Date()
  });

  geo_coords.save((err, res) => {
    if(err) {
      console.log(err);
    } else {
      console.log(res);
    }
  })

  res.sendStatus(200);
});

// router.get('/secret', (req, res) => {
//   res.send("This is the secret api! =D")
// })
//
// router.post('/secret', (req, res) => {
//   res.send("You are posting to this secret api! =D")
// })

export = router;
