"use strict";
var mongoose = require('mongoose');
var LocationSchema = new mongoose.Schema({
    name: String,
    description: String,
    discovered: String,
    longitude: Number,
    latitude: { type: Number, default: 2 },
    date_created: Date,
    date_deleted: {
        type: Date,
        default: null
    }
});
var Location = mongoose.model("Spot", LocationSchema);
module.exports = Location;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxMb2NhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vZGVsTG9jYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUluQyxJQUFJLGNBQWMsR0FBTyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQzFDO0lBQ0UsSUFBSSxFQUFFLE1BQU07SUFDWixXQUFXLEVBQUUsTUFBTTtJQUNuQixVQUFVLEVBQUUsTUFBTTtJQUNsQixTQUFTLEVBQUUsTUFBTTtJQUNqQixRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUM7SUFDckMsWUFBWSxFQUFFLElBQUk7SUFDbEIsWUFBWSxFQUFFO1FBQ1osSUFBSSxFQUFFLElBQUk7UUFDVixPQUFPLEVBQUUsSUFBSTtLQUNoQjtDQUNGLENBQUMsQ0FBQTtBQUdGLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQ3RELGlCQUFTLFFBQVEsQ0FBQSJ9