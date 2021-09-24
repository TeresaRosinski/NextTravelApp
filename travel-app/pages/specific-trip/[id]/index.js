import Head from "next/head";
import styles from "../../../styles/specificTrip.module.css";
import "animate.css";
import ActivityCard from "../../../components/activityCard";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../components/navbar";
import fetch from "isomorphic-unfetch";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function SpecificTrip({ trip }) {
	console.log(trip);
	const activityData = trip.activities;
	const [confirm, setConfirm] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);
	const router = useRouter();

	console.log(trip.start_date);
	if(trip.start_date){
		const longDateStart = trip.start_date;
		const shortDateStart = longDateStart.slice(0, 10);
	}
	if(trip.end_date){
		const longDateEnd = trip.end_date;
		const shortDateEnd = longDateEnd.slice(0, 10);
	}
	

	//sync with the is deleting variable
	useEffect(() => {
		if (isDeleting) {
			deleteTrip();
		}
	}, [isDeleting]);

	const deleteTrip = async () => {
		//on the client side use router to grab id
		const tripId = router.query.id;
		console.log(tripId);
		try {
			const deleted = await fetch(`http://localhost:3000/api/trips/${tripId}`, {
				method: "Delete",
			});
			router.push("/all-trips");
		} catch (err) {
			console.log(err);
		}
	};
	const handleDelete = async () => {
		setIsDeleting(true);
		close();
	};
	//const activityData = trip.activities;
	return (
		<>
			<Head>
				<title>Specific Trip</title>
				<meta name="description" content="Travel application" />
			</Head>
			<Navbar />
			<main>
				<div className={styles.header}>
					<div className={styles.headerText}>
						<p className={styles.title}>{trip.trip_name}</p>
						<p className={styles.subText}>From: {}</p>
						<p className={styles.subText}>To: {}</p>

						<Link href={`/specific-trip/${trip._id}/edit`} id={trip._id}>
							<a className={styles.buttonEdit}>Edit Trip</a>
						</Link>
						<p
							id={trip._id}
							className={styles.buttonEdit}
							onClick={handleDelete}>
							Delete Trip
						</p>
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
							<p className={styles.subTextLRes}>{trip.lodging.total_nights}</p>
						</div>
						<div className={styles.lodgRow}>
							<p className={styles.subTextL}>Total Price: </p>
							<p className={styles.subTextLRes}>
								${trip.lodging.total_nights * trip.lodging.price_per_night}
							</p>
						</div>
					</div>
				</div>
				<div className={styles.sectionContainerLeft}>
					<p className={styles.sectionTitleAct}>Activities</p>
					<Link href="/new-activity">
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
//behavior, Next JS specific function, allows us to run code before code is rendered out to page - runs server-side.
SpecificTrip.getInitialProps = async ({ query: { id } }) => {
	const res = await fetch(`http://localhost:3000/api/trips/${id}`);
	console.log("res", res);
	const { data } = await res.json();

	return { trip: data };
};
