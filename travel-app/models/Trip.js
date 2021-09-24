const mongoose = require("mongoose");
const { Schema } = mongoose;
import ActivitySchema from './Activity';
import LodgingSchema from './Lodging';

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
	budget: {
		type: Number,
	},
	quant_people: {
		type: Number,
	},
	lodging: [LodgingSchema],
	activities: [ActivitySchema],
});

module.exports = mongoose.models.Trip || mongoose.model("Trip", TripSchema);
