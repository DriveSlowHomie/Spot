///<reference path ="./../typings/tsd.d.ts"/>
// import * as mongoose from 'mongoose';
let mongoose = require('mongoose');


//Defining user schema
let LocationSchema:any = new mongoose.Schema (
  {
    name: String,
    description: String,
    discovered: String,
    longitude: Number,
    latitude: { type: Number, default: 2},
    date_created: Date,
    date_deleted: {
      type: Date,
      default: null
  }
})


let Location = mongoose.model("Spot", LocationSchema);
export = Location
