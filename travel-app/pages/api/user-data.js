import { MongoClient, db} from 'mongodb'
import nextConnect from 'next-connect';
import middleware from '../../middleware/middleware';

const handler = nextConnect();

handler.use(middleware);


const insertUserData = async (req) => {
    return await req.db
        .collection('UserData')
        .insertOne(
            req.body, function(err, res) {
                if (err) throw err;
                console.log("1 document inserted");
                console.dir(JSON.stringify(res));
              }
        );
}


handler.post((req, res) => {
    return insertUserData(req).then(data => {
        return res.status(201).send({
            status: 'ok',
            message: 'trip post successfully',
        })
    })
});

export default handler;