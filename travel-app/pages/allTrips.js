import Head from "next/head";
import styles from "../styles/allTrips.module.css";
import "animate.css";
import TripCard from "../components/tripCard";

export default function AllTrips() {
	return (
		<>
			<Head>
				<title>All Trips for Specific User</title>
				<meta name="description" content="Travel application" />
			</Head>

			<main className={styles.page}>
				<p className='title'> All TRIPS FOR USERNAME </p>
        <div className={styles.border}> -</div>
        <div className={styles.tripContainer}>
        <TripCard />
        <TripCard />
        <TripCard />
        <TripCard />
        </div>
	
			</main>
		</>
	);
}
