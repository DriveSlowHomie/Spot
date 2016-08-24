"use strict";
var mongoose = require('mongoose');
var LocationSchema = new mongoose.Schema({
    name: String,
    description: String,
    discovered: String,
    longitude: Number,
    latitude: Number,
    date_created: Date,
    date_deleted: {
        type: Date,
        default: null
    }
});
var Location = mongoose.model("Spot", LocationSchema);
module.exports = Location;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxMb2NhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vZGVsTG9jYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUluQyxJQUFJLGNBQWMsR0FBTyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQzFDO0lBQ0UsSUFBSSxFQUFFLE1BQU07SUFDWixXQUFXLEVBQUUsTUFBTTtJQUNuQixVQUFVLEVBQUUsTUFBTTtJQUNsQixTQUFTLEVBQUUsTUFBTTtJQUNqQixRQUFRLEVBQUUsTUFBTTtJQUNoQixZQUFZLEVBQUUsSUFBSTtJQUNsQixZQUFZLEVBQUU7UUFDWixJQUFJLEVBQUUsSUFBSTtRQUNWLE9BQU8sRUFBRSxJQUFJO0tBQ2hCO0NBQ0YsQ0FBQyxDQUFBO0FBR0YsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7QUFDdEQsaUJBQVMsUUFBUSxDQUFBIn0=