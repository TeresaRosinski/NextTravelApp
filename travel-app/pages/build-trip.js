import Head from "next/head";
import styles from "../styles/buildTrip.module.css";
import "animate.css";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import Router from "next/router";
import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
//useRouter = hook from next js
import { useRouter } from "next/router";


//Static Page b/c no data needed
export default function BuildTrip() {
	const [form, setForm] = useState({
		trip_name: "",
		trip_location: "",
		start_date: "",
		end_date: "",
		budget: "",
		lodging: {
			name: "",
			location: "",
			price_per_night: "",
			total_nights: "",
		},
	});

	//state variable to keep track of when we submit so we know when to display loaders
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [errors, setErrors] = useState({});
	const router = useRouter();

	//This needs to be synced with errors state so that it - runs whenever errors state changes
	useEffect(() => {
		if (isSubmitting) {
			//if no errors - if error object is empty => create trip
			if (Object.keys(errors).length === 0) {
				createTrip();
			} else {
				setIsSubmitting(false);
			}
		}
	}, [errors]);

	const handleSubmit = (e) => {
		e.preventDefault();
		let errs = validate();
		setErrors(errs);
		setIsSubmitting(true);
	};

	const handleChange = (e) => {
		setForm({
			//spread out current forms state
			...form,
			//dynamic propety --> so the same function can be used for all form inputs
			[e.target.name]: e.target.value,
		});
	};

	const validate = () => {
		let err = {};
		//only required property = trip name
		if (!form.trip_name) {
			err.trip_name = "Trip Name is Required";
		}
		return err;
	};

	const createTrip = async () => {
		try {
			const res = await fetch("http://localhost:3000/api/trips/all-trips", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(form),
			});
			router.push("/all-trips");
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<Head>
				<title>Build a Trip</title>
				<meta name="description" content="Travel application" />
			</Head>
			<Navbar />

			<main>
				<div className={styles.header}>
					<div className={styles.image}>
						<Image
							src="/character-working.svg"
							height={500}
							width={500}></Image>
					</div>
					<p className={styles.title}>Plan Something Extraodinary</p>
				</div>

				<form className={styles.form}>
					<p className={styles.formTitle}>Trip Basics</p>
					{isSubmitting
						? console.log("submitting")
						: console.log("Not Submitting")}
					<div className={styles.field}>
						<label>Name</label>
						<input
							onChange={handleChange}
							type="text"
							name="trip_name"
							placeholder="Trip Name"></input>
					</div>
					<div className={styles.field}>
						<label>Location</label>
						<input
							onChange={handleChange}
							type="text"
							name="trip_location"
							placeholder="Location"></input>
					</div>

					<div className={styles.fields_row}>
						<div className={styles.field_2inputs}>
							<label>Start Date</label>
							<input
								onChange={handleChange}
								type="date"
								name="start_date"
								id="start_date"
								min="2021-09-17"
								nax="2041-09-17"></input>
						</div>
						<div className={styles.field_2inputs}>
							<label>End Date</label>
							<input
								onChange={handleChange}
								type="date"
								name="end_date"
								id="end_date"
								min="2021-09-17"
								max="2041-09-17"></input>
						</div>
					</div>

					<div className={styles.fields_row}>
						<div className={styles.field_2inputs}>
							<label>Budget</label>
							<input
								onChange={handleChange}
								type="number"
								name="trip_budget"
								id="budget"
								palceholder="$"
								min="0"></input>
						</div>
						<div className={styles.field_2inputs}>
							<label>Quantity of People Going</label>
							<input
								onChange={handleChange}
								type="number"
								name="num_travelers"
								id="budget"
								palceholder="$"
								min="0"></input>
						</div>
					</div>
					<p className={styles.formTitle}>Lodging</p>
					<div className={styles.field}>
						<label>Lodging Name</label>
						<input
							onChange={handleChange}
							type="text"
							name="lodging_name"
							placeholder="Lodging"></input>
					</div>
					<div className={styles.field}>
						<label>Lodging Location</label>
						<input
							onChange={handleChange}
							type="text"
							name="lodging_location"
							placeholder="Lodging Address"></input>
					</div>
					<div className={styles.fields_row}>
						<div className={styles.field_2inputs}>
							<label>Price Per Night</label>
							<input
								onChange={handleChange}
								type="number"
								name="price_per_night"
								id="price-night"
								placeholder="Price Per Night"
								min="0"></input>
						</div>
						<div className={styles.field_2inputs}>
							<label>Total Nights</label>
							<input
								onChange={handleChange}
								type="number"
								name="num_nights"
								id="lodging-nights"
								placeholder="Total Nights at Lodging"
								min="0"></input>
						</div>
					</div>
					<div className={styles.buttonHolder}>
						<button
							className={styles.button}
							type="submit"
							onClick={handleSubmit}>
							SUBMIT
						</button>
					</div>
				</form>
			</main>
		</>
	);
}
