const mongoose = require("mongoose");
const { Schema } = mongoose;

const TripSchema = new Schema({
	trip_name: {
		type: String,
		required: [true, "Please add a name to your trip"],
		trim: true,
		maxlength: [100, "Name cannot be more than 100 characters"],
	},
	trip_location: {
		type: String,
		trim: true,
	},
	start_date: {
		type: Date,
	},
	end_date: {
		type: Date,
	},
	quant_people: {
		type: Number,
	},
	lodging: [
		{
			name: String,
			location: String,
			price_per_night: Number,
			total_nights: Number,
		},
	],
	activities: [
		{
			name: String,
			details: String,
			url: String,
			hours: String,
			date_going: Date,
			location: String,
			price_person: Number,
		},
	],
});

module.exports = mongoose.models.Trip || mongoose.model("Trip", TripSchema);
