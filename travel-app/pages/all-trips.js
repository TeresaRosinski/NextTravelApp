import Head from "next/head";
import styles from "../styles/allTrips.module.css";
import "animate.css";
import TripCard from "../components/tripCard";
import Link from "next/link";
import fetch from 'isomorphic-unfetch';
import Navbar from "../components/navbar"



export default function AllTrips({ trips }) {
	return (
		<>
			<Head>
				<title>All Trips for Specific User</title>
				<meta name="description" content="Travel application" />
			</Head>
			<Navbar/>
			<main className={styles.page}>
				<p className={styles.title}> All TRIPS </p>
				<div className={styles.border}> -</div>
				<div className={styles.tripContainer}>
					{
						trips.map(trip =>
							<TripCard id={trip._id} name={trip.trip_name} location={trip.trip_location} start_date={trip.start_date} end_date={trip.end_date} />
						)
					}
				</div>
			</main>
		</>
	);
}
//behavior, Next JS specific function, allows us to run code before code is rendered out to page - runs server-side. 
AllTrips.getInitialProps = async() => {
	const res = await fetch('http://localhost:3000/api/trips/all-trips');

	const { data } = await res.json();

	return { trips: data };
}