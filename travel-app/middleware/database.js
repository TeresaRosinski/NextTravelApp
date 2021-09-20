import { MongoClient } from 'mongodb';

const client = new MongoClient("mongodb+srv://Teresa:Teresa@cluster0.eil3q.mongodb.net/next_travel_app?retryWrites=true&w=majority");

export default function database(req, res, next) {
  client.connect().then(() => {
    req.dbClient = client;
    req.db = client.db("NextTravelApp");
    return next();
  });
}
