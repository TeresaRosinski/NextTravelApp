import Head from "next/head";
import styles from "../../styles/specificTrip.module.css";
import "animate.css";
import ActivityCard from "../../components/activityCard";
import Image from "next/image";
import Link from "next/link";
import { MongoClient, ObjectId } from 'mongodb';
import Navbar from "../../components/navbar";

export default function SpecificTrip(props) {
	const trip = JSON.parse(props.trip);
	console.log(trip);
	console.log(trip.name);

	const activityData = trip.activities;
	return (
		<>
			<Head>
				<title>Specific Trip</title>
				<meta name="description" content="Travel application" />
			</Head>
			<Navbar />
			<main c>
				<div className={styles.header}>
					<div className={styles.headerText}>
						<p className={styles.title}>{trip.name}</p>
						<p className={styles.subText}>From: {trip.start_date}</p>
						<p className={styles.subText} >To: {trip.end_date}</p>
						<Link href={`/specific-trip/edit/${trip._id}`} id={trip._id}>
							<a className={styles.buttonEdit}>Edit Trip</a>
						</Link>
					</div>
				</div>
				<div className={styles.sectionContainerCenter}>
					<div className={styles.lodging}>
						<p className={styles.sectionTitleLodg}>Lodging</p>
						<div className={styles.lodgRow}>
							<p className={styles.subTextL}>Name: </p> 
							<p className={styles.subTextLRes}>{trip.lodging.name}</p>
						</div>
						<div className={styles.lodgRow}>
							<p className={styles.subTextL}>Address: </p> 
							<p className={styles.subTextLRes}>{trip.lodging.location}</p>
						</div>
						<div className={styles.lodgRow}>
							<p className={styles.subTextL}>Total Nights: </p> 
							<p className={styles.subTextLRes}>{trip.lodging.num_nights}</p>
						</div>
						<div className={styles.lodgRow}>
							<p className={styles.subTextL}>Total Price: </p> 
							<p className={styles.subTextLRes}>${trip.lodging.num_nights * trip.lodging.price_per_night}</p>
						</div>
			
					</div>
				</div>
				<div className={styles.sectionContainerLeft}>
					<p className={styles.sectionTitleAct}>Activities</p>
					<Link href='/new-activity'>
						<a className={styles.button}>Add New Activity</a>
					</Link>
					<div className={styles.activities}>
						{
							activityData.map(act => <ActivityCard name={act.name} id={act._id} url={act.url} details={act.details} hours={act.hours} date_going={act.date_going} location={act.location}/>)
						}
					</div>
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
		const userTrips = await userDataCollection.findOne({ _id: ObjectId("6147c6b6dac5291aa83b98e0")});
		const trip = userTrips.trips.find(trip => trip._id.toString() == context.params.id);
		return {
			props: { trip: JSON.stringify(trip) }, // will be passed to the page component as props
		}
	}
	catch (error) {
		console.log(error)
	}
	finally {
		await client.close();
	}
	return {props: {}}
}
