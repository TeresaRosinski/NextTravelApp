import Head from "next/head";
import styles from "../styles/allTrips.module.css";
import "animate.css";
import TripCard from "../components/tripCard";
import Link from "next/link";
import { MongoClient } from 'mongodb';



export async function getServerSideProps(context) {
	const client = new MongoClient("mongodb+srv://Teresa:Teresa@cluster0.eil3q.mongodb.net/next_travel_app?retryWrites=true&w=majority");

	try {
		await client.connect();
		const database = client.db("NextTravelApp");
		const userTripsCollection = database.collection('userTrips');
		const allUserTrips = await userTripsCollection.find({}).toArray();
		const userTrips = allUserTrips[0];

		return {
			props: { name: userTrips.name, trips: JSON.stringify(userTrips.trips)}, // will be passed to the page component as props
		}
	}
	catch (error) {
		console.log(error)
	}
	finally {
		await client.close();
	}
}

export default function AllTrips(props) {
	const trips = JSON.parse(props.trips);
	return (
		<>
			<Head>
				<title>All Trips for Specific User</title>
				<meta name="description" content="Travel application" />
			</Head>

			<main className={styles.page}>
				<Link href="/">
					<a className={styles.back}>back</a>
				</Link>
				<p className="title"> All TRIPS FOR {props.name} </p>
				<Link href="/build-trip">
					<a>
						<p className={styles.button}>Create New Trip</p>
					</a>
				</Link>

				<div className={styles.border}> -</div>
				<div className={styles.tripContainer}>
					{
						trips.map(trip =>
							<TripCard id={trip._id} trip_name={trip.trip_name} trip_location={trip.trip_location} start_date={trip.start_date} end_date={trip.end_date} />
						)
					}
				</div>
			</main>
		</>
	);
}
