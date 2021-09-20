import { ObjectId } from 'bson';
import nextConnect from 'next-connect';
import middleware from '../../../middleware/middleware';

const handler = nextConnect();

handler.use(middleware);

const insertTrip = async (req) => {
    const { _id, trip_name, lodging, activities } = req.body;
    console.log(trip_name);
    return await req.db
        .collection('userTrips')
        .insertOne(
            req.body,function(err, res) {
                if (err) throw err;
                console.log("1 document inserted");
                db.close();
              }
        );
}


const pushTrip = async (req) => {
    const { _id, trip_name, lodging, activities } = req.body;
    console.log(trip_name);
    return await req.db
        .collection('userTrips')
        .updateOne(
            { _id: ObjectId("6147c6b6dac5291aa83b98e0") },
            { $push: {"trips": [{ "trip_name": trip_name}] }}
        ).then(response => {
            console.log(response);
            return { status: 'ok' }
        }).catch(error => {
            return {
                status: 'error',
                message: error.toString(),
            }
        });
}

handler.put((req, res) => {
    return pushTrip(req).then(data => {
        return res.status(201).send({
            status: 'ok',
            message: 'trip update successfully',
        })
    })
});

handler.post((req, res) => {
    return insertTrip(req).then(data => {
        return res.status(201).send({
            status: 'ok',
            message: 'trip post successfully',
        })
    })
});


export default handler;