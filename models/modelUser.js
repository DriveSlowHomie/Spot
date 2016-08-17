"use strict";
var _this = this;
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
    temp.passwordHash = crypto.pbkdf2Sync(password, _this.salt, 1000, 64).toString('hex');
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
        username: this.username,
        exp: exp.getTime() / 1000
    }, 'SecretKey');
});
var User = mongoose.model("User", UserSchema);
module.exports = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxVc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kZWxVc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxpQkFzQ0E7QUF0Q0EsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRW5DLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvQixJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFHbEMsSUFBSSxVQUFVLEdBQU8sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUN0QztJQUNFLEtBQUssRUFBRSxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFDO0lBQ25ELFlBQVksRUFBQyxNQUFNO0lBQ25CLElBQUksRUFBQyxNQUFNO0NBQ1osQ0FDRixDQUFBO0FBRUQsVUFBVSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsVUFBQyxRQUFRO0lBQ3hDLElBQUksSUFBSSxHQUFHLEVBQUMsWUFBWSxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUMsSUFBSSxFQUFDLENBQUM7SUFDMUMsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNsRCxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEtBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVyRixNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDLENBQUM7QUFFSCxVQUFVLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLFVBQVMsUUFBUTtJQUNuRCxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0UsTUFBTSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN6QyxDQUFDLENBQUMsQ0FBQztBQUNILFVBQVUsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFO0lBQzlCLElBQUksS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7SUFDdkIsSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDckMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDZCxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUc7UUFDWixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7UUFDdkIsR0FBRyxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJO0tBQzFCLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDbkIsQ0FBQyxDQUFDLENBQUE7QUFDRixJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztBQUM5QyxpQkFBUyxJQUFJLENBQUEifQ==