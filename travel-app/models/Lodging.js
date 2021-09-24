const mongoose = require("mongoose");
const { Schema } = mongoose;

const LodgingSchema = new Schema({
  name: String,
	location: String,
	price_per_night: Number,
	total_nights: Number,
});

module.exports = mongoose.models.Lodging || mongoose.model("Lodging", LodgingSchema);