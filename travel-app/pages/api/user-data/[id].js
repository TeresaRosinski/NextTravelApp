import { ObjectId } from 'bson';
import nextConnect from 'next-connect';
import middleware from '../../../middleware/middleware';

const handler = nextConnect();

handler.use(middleware);

const pushTrip = async (req) => {
    let trip = req.body;
    trip._id = ObjectId();
    trip.lodging._id = ObjectId();
    return await req.db
        .collection('UserData')
        .updateOne(
            { "_id": ObjectId(req.query.id) },
            { $push: {"trips": trip }}
        ).then(response => {
            if(response.matchedCount === 1) return { status: 'ok' }
            else return { status: 'warning', message: 'filter did not match any documents' }
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

export default handler;