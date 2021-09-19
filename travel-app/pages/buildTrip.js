import Head from "next/head";
import styles from "../styles/buildTrip.module.css";
import "animate.css";
import Image from "next/image";
import Link from "next/link";

export default function BuildTrip() {
	return (
		<>
			<Head>
				<title>Build a Trip</title>
				<meta name="description" content="Travel application" />
			</Head>

			<main className={styles.page}>
				<Link href='/allTrips'>
					<a className={styles.back}>back</a>
				</Link>
				<div className={styles.header}>
					<div className={styles.image}>
						<Image src="/characterWorking.svg" height={500} width={500}></Image>
					</div>
					<p className={styles.title}>Plan Something Extraodinary</p>
				</div>

				<form className={styles.form}>
					<p className={styles.formTitle}>Trip Basics</p>

					<div className={styles.field}>
						<label>Name</label>
						<input
							type="text"
							name="trip[name]"
							placeholder="Trip Name"></input>
					</div>
					<div className={styles.field}>
						<label>Location</label>
						<input
							type="text"
							name="trip[location]"
							placeholder="Location"></input>
					</div>

					<div className={styles.fields_row}>
						<div className={styles.field_2inputs}>
							<label>Start Date</label>
							<input
								type="date"
								name="trip[start-date]"
								id="trip-start"
								min="2021-09-17"
								nax="2041-09-17"></input>
						</div>
						<div className={styles.field_2inputs}>
							<label>End Date</label>
							<input
								type="date"
								name="trip[end-date]"
								id="trip-end"
								min="2021-09-17"
								max="2041-09-17"></input>
						</div>
					</div>

					<div className={styles.fields_row}>
						<div className={styles.field_2inputs}>
							<label>Budget</label>
							<input
								type="number"
								name="trip[budget]"
								id="budget"
								palceholder="$"
								min="0"></input>
						</div>
						<div className={styles.field_2inputs}>
							<label>Quantity of People Going</label>
							<input
								type="number"
								name="trip[budget]"
								id="budget"
								palceholder="$"
								min="0"></input>
						</div>
					</div>
					<p className={styles.formTitle}>Lodging</p>
					<div className={styles.field}>
						<label>Lodging Name</label>
						<input
							type="text"
							name="trip[lodging-name]"
							placeholder="Lodging"></input>
					</div>
					<div className={styles.field}>
						<label>Lodging Location</label>
						<input
							type="text"
							name="trip[lodging-location]"
							placeholder="Lodging Address"></input>
					</div>
					<div className={styles.fields_row}>
						<div className={styles.field_2inputs}>
							<label>Price Per Night</label>
							<input
								type="number"
								name="trip[lodging-price-night]"
								id="lodging-price-night"
								placeholder="Price Per Night"
								min="0"></input>
						</div>
						<div className={styles.field_2inputs}>
							<label>Total Nights</label>
							<input
								type="number"
								name="trip[lodging-nights]"
								id="lodging-nights"
								placeholder="Total Nights at Lodging"
								min="0"></input>
						</div>
					</div>
					<div className={styles.buttonHolder}>
						<button className={styles.button} type="submit">
							SUBMIT
						</button>
					</div>
				</form>
			</main>
		</>
	);
}
