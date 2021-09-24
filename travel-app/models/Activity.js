const mongoose = require("mongoose");
const { Schema } = mongoose;

const ActivitySchema = new Schema({
  name: String,
	details: String,
	url: String,
	hours: String,
	date_going: Date,
	location: String,
	price_person: Number,
});

module.exports = mongoose.models.Trip || mongoose.model("Activity", ActivitySchema);