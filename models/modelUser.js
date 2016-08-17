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
    console.log("oh this is the pass: " + password);
    _this.salt = crypto.randomBytes(16).toString('hex');
    _this.passwordHash = crypto.pbkdf2Sync(password, _this.salt, 1000, 64).toString('hex');
    console.log("this is the passwordhash: " + _this.passwordHash);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxVc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kZWxVc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxpQkFxQ0E7QUFyQ0EsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRW5DLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvQixJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFHbEMsSUFBSSxVQUFVLEdBQU8sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUN0QztJQUNFLEtBQUssRUFBRSxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFDO0lBQ25ELFlBQVksRUFBQyxNQUFNO0lBQ25CLElBQUksRUFBQyxNQUFNO0NBQ1osQ0FDRixDQUFBO0FBRUQsVUFBVSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsVUFBQyxRQUFRO0lBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQXdCLFFBQVUsQ0FBQyxDQUFBO0lBQy9DLEtBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDbEQsS0FBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxLQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckYsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBNkIsS0FBSSxDQUFDLFlBQWMsQ0FBQyxDQUFBO0FBQy9ELENBQUMsQ0FBQyxDQUFDO0FBRUgsVUFBVSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxVQUFTLFFBQVE7SUFDbkQsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNFLE1BQU0sQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDekMsQ0FBQyxDQUFDLENBQUM7QUFDSCxVQUFVLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRTtJQUM5QixJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ3ZCLElBQUksR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ2QsRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHO1FBQ1osUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1FBQ3ZCLEdBQUcsRUFBRSxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSTtLQUMxQixFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQ25CLENBQUMsQ0FBQyxDQUFBO0FBQ0YsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDOUMsaUJBQVMsSUFBSSxDQUFBIn0=