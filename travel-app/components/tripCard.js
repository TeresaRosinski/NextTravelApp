import Image from "next/image";
import Link from "next/link";
import styles from "./tripCard.module.css";

export default function TripCard(props) {
	return (
		<Link href={`/specific-trip/${props.id}`} id={props._id}>
			<a>
				<div className={styles.cardCont}>
					<p className={styles.title}>{props.name}</p>
					<p className={styles.subText}> {props.location} </p>
					<p className={styles.subText}> {props.start_date}</p>
					<p className={styles.subText}> {props.end_date}</p>
				</div>
			</a>
		</Link>
	);
}
