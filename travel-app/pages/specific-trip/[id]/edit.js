import Head from "next/head";
import styles from "../../../styles/buildTrip.module.css";
import "animate.css";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../components/navbar";



export default function EditTrip(props) {


	
	return (
		<>
			<Head>
				<title>Build a Trip</title>
				<meta name="description" content="Travel application" />
			</Head>
			<Navbar />
			<main className={styles.page}>
				<Link href='/all-trips'>
					<a className={styles.back}>back</a>
				</Link>
				<div className={styles.header}>
					<div className={styles.image}>
						<Image src="/character-working.svg" height={500} width={500}></Image>
					</div>
					<p className={styles.title}>Edit {trip.name}</p>
				</div>

				<form className={styles.form}>
					<p className={styles.formTitle}>Trip Basics</p>

					<div className={styles.field}>
						<label>Name</label>
						<input
							type="text"
							name="trip_name"
							placeholder={trip.name}></input>
					</div>
					<div className={styles.field}>
						<label>Location</label>
						<input
							type="text"
							name="trip_location"
							placeholder={trip.location}
							value={trip.location}></input>
					</div>

					<div className={styles.fields_row}>
						<div className={styles.field_2inputs}>
							<label>Start Date</label>
							<input
								type="date"
								name="trip_start_date"
								id="trip-start"
								min="2021-09-17"
								nax="2041-09-17"
                                placeholder={trip.start_date}></input>
						</div>
						<div className={styles.field_2inputs}>
							<label>End Date</label>
							<input
								type="date"
								name="trip_end_date"
								id="trip-end"
								min="2021-09-17"
								max="2041-09-17"
                                placeholder={trip.end_date}
                                ></input>
						</div>
					</div>

					<div className={styles.fields_row}>
						<div className={styles.field_2inputs}>
							<label>Budget</label>
							<input
								type="number"
								name="trip_budget"
								id="budget"
								palceholder={trip.budget}
								min="0"></input>
						</div>
						<div className={styles.field_2inputs}>
							<label>Quantity of People Going</label>
							<input
								type="number"
								name="num_travelers"
								id="budget"
								palceholder={trip.num_travelers}
								min="0"></input>
						</div>
					</div>
					<p className={styles.formTitle}>Lodging</p>
					<div className={styles.field}>
						<label>Lodging Name</label>
						<input
							type="text"
							name="lodging_name"
							placeholder={trip.lodging.name}></input>
					</div>
					<div className={styles.field}>
						<label>Lodging Location</label>
						<input
							type="text"
							name="lodging_location"
							placeholder={trip.lodging.location}></input>
					</div>
					<div className={styles.fields_row}>
						<div className={styles.field_2inputs}>
							<label>Price Per Night</label>
							<input
								type="number"
								name='price_per_night'
								id="price-night"
								placeholder={trip.price_per_night}
								min="0"></input>
						</div>
						<div className={styles.field_2inputs}>
							<label>Total Nights</label>
							<input
								type="number"
								name='num_nights'
								id="lodging-nights"
								placeholder={trip.lodging.num_nights}
								min="0"></input>
						</div>
					</div>
					<div className={styles.buttonHolder}>
						<button className={styles.button} type="submit" onClick={handleSubmit}>
							SAVE CHANGES
						</button>
					</div>
				</form>
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