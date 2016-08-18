"use strict";
var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var UserSchema = new mongoose.Schema({
    email: { type: String, unique: true, lowercase: true },
    passwordHash: String,
    salt: String
});
UserSchema.method("setPassword", function (password) {
    var temp = { passwordHash: null, salt: null };
    temp.salt = crypto.randomBytes(16).toString('hex');
    temp.passwordHash = crypto.pbkdf2Sync(password, temp.salt, 1000, 64).toString('hex');
    console.log("this is the hashed password " + temp.passwordHash);
    return temp;
});
UserSchema.method('validatePassword', function (password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
    return (hash === this.passwordHash);
});
UserSchema.method('generateJWT', function () {
    var today = new Date();
    var exp = new Date(today);
    exp.setDate(today.getDate() + 36500);
    return jwt.sign({
        id: this._id,
        email: this.email,
        exp: exp.getTime() / 1000
    }, 'SecretKey');
});
var User = mongoose.model("User", UserSchema);
module.exports = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxVc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kZWxVc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFbkMsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQy9CLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUdsQyxJQUFJLFVBQVUsR0FBTyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQ3RDO0lBQ0UsS0FBSyxFQUFFLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUM7SUFDbkQsWUFBWSxFQUFDLE1BQU07SUFDbkIsSUFBSSxFQUFDLE1BQU07Q0FDWixDQUNGLENBQUE7QUFFRCxVQUFVLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxVQUFDLFFBQVE7SUFDeEMsSUFBSSxJQUFJLEdBQUcsRUFBQyxZQUFZLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBQyxJQUFJLEVBQUMsQ0FBQztJQUMxQyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ2xELElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JGLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQStCLElBQUksQ0FBQyxZQUFjLENBQUMsQ0FBQTtJQUMvRCxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDLENBQUM7QUFFSCxVQUFVLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLFVBQVMsUUFBUTtJQUNuRCxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0UsTUFBTSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN6QyxDQUFDLENBQUMsQ0FBQztBQUNILFVBQVUsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFO0lBQzlCLElBQUksS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7SUFDdkIsSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDckMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDZCxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUc7UUFDWixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7UUFDakIsR0FBRyxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJO0tBQzFCLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDbkIsQ0FBQyxDQUFDLENBQUE7QUFDRixJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztBQUM5QyxpQkFBUyxJQUFJLENBQUEifQ==