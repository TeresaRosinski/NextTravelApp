import Head from "next/head";
import styles from "../styles/allTrips.module.css";
import "animate.css";
import TripCard from "../components/tripCard";
import Link from "next/link";
import user1 from "../data/practData";

const tripData = user1.trips; 
console.log(tripData);
export default function AllTrips(props) {
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
				<p className="title"> All TRIPS FOR {user1.name} </p>
				<div className={styles.border}> -</div>
				<div className={styles.tripContainer}> 
				{
					tripData.map(trip =>
						<TripCard id={trip._id} trip_name={trip.trip_name} trip_location={trip.trip_location} start_date={trip.start_date} end_date={trip.end_date}/>
					)
				}
				</div>
			</main>
		</>
	);
}
