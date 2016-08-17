///<reference path ="./../typings/tsd.d.ts"/>
// import * as mongoose from 'mongoose';
let mongoose = require('mongoose');

let crypto = require('crypto');
let jwt = require('jsonwebtoken');

//Defining user schema
let UserSchema:any = new mongoose.Schema(
  {
    email: {type:String, unique: true, lowercase: true},
    passwordHash:String,
    salt:String
  }
)

UserSchema.method("setPassword", (password) => {
  console.log(`oh this is the pass: ${password}`)
  this.salt = crypto.randomBytes(16).toString('hex')
  this.passwordHash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
  console.log(`this is the passwordhash: ${this.passwordHash}`)
});

UserSchema.method('validatePassword', function(password) {
    let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
     return (hash === this.passwordHash);
});
UserSchema.method('generateJWT', function() {
   let today = new Date();
   let exp = new Date(today);
   exp.setDate(today.getDate() + 36500);
   return jwt.sign({
     id: this._id,
     username: this.username,
     exp: exp.getTime() / 1000
   }, 'SecretKey');
})
let User = mongoose.model("User", UserSchema);
export = User
