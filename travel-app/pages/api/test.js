import dbConnect from "../../../util/dbConnect";
import Trip from "../../../models/Trip";

dbConnect();

export default async (req, res) => {
	const {} = req;

	switch (method) {
		case "GET":
			try {
				const trip = await Trip.find({});
				res.status(200).json({ success: true, data: notes });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case "POST":
			try {
				const trip = await Trip.create(req.body);

				res.status(201).json({ success: true, data: trip });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
};
