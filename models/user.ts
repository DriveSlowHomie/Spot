///<reference path ="./../typings/tsd.d.ts"/>
import * as mongoose from 'mongoose';

let crypto = require('crypto');
let jwt = require('jsonwebtoken');

//Defining user schema
let UserSchema:any = new mongoose.Schema(
  {
    username: {type:String, lowercase: true, unique: true},
    email: {type:String, unique: true, lowercase: true},
    passwordHash:String,
    salt:String
  }
)

UserSchema.method("setPassword", (password) => {
  this.salt = crypto.randomBytes(16).toString('hex')
  this.passwordHash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
});

UserSchema.method('validatePassword', function(password) {
    let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
     return (hash === this.passwordHash);
});
UserSchema.method('generateJWT', function() {
   let today:any = new Date();
   let exp:any = new Date(today);
   exp.setDate(today.getDate() + 36500);
   return jwt.sign({
     id: this._id,
     username: this.username,
     exp: exp.getTime() / 1000
   }, 'SecretKey');
})
var User = mongoose.model("User", UserSchema);
export { User }
