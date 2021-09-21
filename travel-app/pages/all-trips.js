import Head from "next/head";
import styles from "../styles/allTrips.module.css";
import "animate.css";
import TripCard from "../components/tripCard";
import Link from "next/link";
import { MongoClient } from 'mongodb';
import Navbar from "../components/navbar"


export default function AllTrips(props) {
	const trips = JSON.parse(props.trips);
	return (
		<>
			<Head>
				<title>All Trips for Specific User</title>
				<meta name="description" content="Travel application" />
			</Head>
			<Navbar/>
			<main className={styles.page}>
				<p className="title"> All TRIPS FOR {props.name} </p>
				<div className={styles.border}> -</div>
				<div className={styles.tripContainer}>
					{
						trips.map(trip =>
							<TripCard id={trip._id} name={trip.name} location={trip.location} start_date={trip.start_date} end_date={trip.end_date} />
						)
					}
				</div>
			</main>
		</>
	);
}

export async function getServerSideProps(context) {
	const client = new MongoClient("mongodb+srv://Teresa:Teresa@cluster0.eil3q.mongodb.net/next_travel_app?retryWrites=true&w=majority");

	try {
		await client.connect();
		const database = client.db("NextTravelApp");
		const userDataCollection = database.collection('UserData');
		const allUserTrips = await userDataCollection.find({}).toArray();
		const userData = allUserTrips[0];

		return {
			props: { name: userData.name, trips: JSON.stringify(userData.trips)}, // will be passed to the page component as props
		}
	}
	catch (error) {
		console.log(error)
	}
	finally {
		await client.close();
	}
}
