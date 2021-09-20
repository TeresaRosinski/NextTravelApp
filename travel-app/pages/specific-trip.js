import Head from "next/head";
import styles from "../styles/specificTrip.module.css";
import "animate.css";
import ActivityCard from "../components/activityCard";
import Image from "next/image";
import Link from "next/link";
import user1 from "../data/practData";

const tripData = user1.trips[0]; 
const activityData = tripData.activities;

export default function SpecificTrip(props) {
	return (
		<>
			<Head>
				<title>Specific Trip</title>
				<meta name="description" content="Travel application" />
			</Head>

			<main className={styles.page}>
				<div className={styles.header}>
					<div className={styles.headerText}>
						<p className={styles.title}>{tripData.trip_name}</p>
						<p className={styles.subText}>From: {tripData.start_date}</p>
						<p className={styles.subText} >To: {tripData.end_date}</p>
					</div>
				</div>
				<div className={styles.sectionContainerCenter}>
					
				<p className={styles.sectionTitle}>Lodging</p>
					<div className={styles.lodging}>

						<p className={styles.subText}>Name: <span>{tripData.lodging.name}</span></p>
						<p className={styles.subText}>Address:<span>{tripData.lodging.location}</span></p>
						<p className={styles.subText}>Price Per Night: <span>{tripData.lodging.pricePerNight}</span> </p>
						<p className={styles.subText}>Total Nights:<span>{tripData.lodging.total_nights}</span> </p>
						<p className={styles.subText}>Total Price:<span>${tripData.lodging.total_nights * tripData.lodging.pricePerNight}</span></p>
					</div>
				</div>

				<div className={styles.sectionContainerLeft}>
					<p className={styles.sectionTitle}>Activities</p>
					
					<div className={styles.activities}>
						{
							activityData.map(act => <ActivityCard name={act.name} id={act._id} url={act.url} details={act.details} hours={act.hours} date_going={act.date_going} location={act.location}/>)
						}
					</div>
					<Link href='/new-activity'>
						<a className={styles.button}>Add New Activity</a>
					</Link>
				</div>
			</main>
		</>
	);
}
