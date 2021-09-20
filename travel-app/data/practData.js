//database = Travel App
//collection = users
//document = specific user + trips associated with them
//or
//collections 1:users, 2; trips
//each trip is associated with a user by id

const user1 = {
	_id: "1234",
	name: "Teresa R",
	email: "trosinski89@gmail.com",
	trips: [
		{
			_id: "auto generated by mongoDB 12",
			trip_name: "Smoky Mountains",
			trip_location: "Smoky Mountains, NC + TN",
			start_date: "09/23/2021",
			end_date: "10/3/2021",
			quant_people: 12,
			lodging: {
				name: "VRBO Maggie Valley",
				location: "Maggie Valley, NC Some street, some zip",
				pricePerNight: 345,
				total_nights: 7,
			},
			activities: [
				{
					_id: "12345",
					name: "Anakeesta",
					details: "Outdoor Theme park, walking, food, etc.",
					url: "https://anakeesta.com/",
					hours: "9am - 8pm",
					date_going: "09/27/2021",
					location: "576 Parkway, Gatlinburg, TN 37738",
					price_person: 30,
				},
				{
					_id: "created by MongoDb",
					name: "Great SMoky Mountain Railroad",
					details: "4.5 hour train ride",
					url: "https://www.gsmr.com/",
					hours: "10:30am",
					date_going: "09/28/2021",
					location:
						"Great Smoky Mountains Railroad, 45 Mitchell St, Bryson City, NC 28713",
					price_person: 54,
				},
			],
		},
	],
};
export default user1;
