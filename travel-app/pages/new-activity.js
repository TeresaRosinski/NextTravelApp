import Head from "next/head";
import styles from "../styles/activity.module.css";
import "animate.css";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function BuildTrip() {
	const tripData = user1.trips[0];
	const activityData = tripData.activities;
	const [activities, setActivity] = useState(activityData);
	console.log(activityData);

	return (
		<>
			<Head>
				<title>Build a Trip</title>
				<meta name="description" content="Travel application" />
			</Head>

			<main className={styles.pageW}>
				<div className={styles.header}>
					<p className={styles.title}>Create Activity</p>
				</div>

				<div className={styles.content}>
					<form className={styles.form}>
						<p className={styles.formTitle}>Activity Info</p>
						<div className={styles.field}>
							<label>Name</label>
							<input
								type="text"
								name="activity[name]"
								placeholder="Activity Name"></input>
						</div>
						<div className={styles.field}>
							<label>Details</label>
							<input
								type="text"
								name="activity[details]"
								placeholder="Details"></input>
						</div>
						<div className={styles.field}>
							<label>Location</label>
							<input
								type="text"
								name="activity[location]"
								placeholder="Location"></input>
						</div>
						<div className={styles.field}>
							<label>Activity URL</label>
							<input
								type="text"
								name="activity[url]"
								placeholder="www.activity_name.com"></input>
						</div>
						<div className={styles.fields_row}>
							<div className={styles.field_2inputs}>
								<label>Date Going</label>
								<input
									type="date"
									name="activity[date_going]"
									id="activity-date"
									min="2021-09-17"
									max="2041-09-17"></input>
							</div>
							<div className={styles.field_2inputs}>
								<label>Price Per Person</label>
								<input
									type="number"
									name="activity[price_person]"
									id="price"
									palceholder="$"></input>
							</div>
						</div>
						<div className={styles.buttonHolder}>
							<button className={styles.button} type="submit">
								SUBMIT
							</button>
						</div>
					</form>
					<div className={styles.image}>
						<Image src="/character22.svg" height={500} width={500}></Image>
					</div>
				</div>
			</main>
		</>
	);
}
