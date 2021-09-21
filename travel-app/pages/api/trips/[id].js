import { ObjectId } from 'bson';
import nextConnect from 'next-connect';
import middleware from '../../../middleware/middleware';

const handler = nextConnect();

handler.use(middleware);

const updateTrip = async (req) => {
    let newTrips = req.body.trips;


    console.log(req.body.userId );
    console.log(newTrips);
    return await req.db
        .collection('UserData')
        .updateOne(
            { "_id": req.body.userId },

            {
                $set:
                {
                    trips: [
                        newTrips

                        /*
                        '_id': trip.id,
                        'name' : trip.name,
                        'location' : trip.location,
                        'start_date' :trip.start_date,
                        'end_date' : trip.end_date,
                        'budget' : trip.budget,
                        'num_travelers' : trip.num_travelers,
                        'lodging': {
                            'name': trip.lodging.name,
                            'location': trip.lodging.location,
                            'price_per_night': trip.lodging.price_per_night,
                            'num_nights': trip.lodging.num_nights
                            } */
                        ]
                },
            }

        ).then(response => {
            console.log(response);
            if (response.matchedCount === 1) return { status: 'ok' }
            else return { status: 'warning', message: 'filter did not match any documents' }
        }).catch(error => {
            return {
                status: 'error',
                message: error.toString(),
            }
        });
}

handler.put((req, res) => {
    return updateTrip(req).then(data => {
        return res.status(201).send({
            status: 'ok',
            message: 'trip update successfully',
        })
    })
});

export default handler;