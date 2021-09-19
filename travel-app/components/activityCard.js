import styles from "./activityCard.module.css";
import Link from "next/Link";

export default function ActivityCard(props) {
	return (
		<div className={styles.cardCont} id={props._id}>
			<div className={styles.editors}>
				<Link href="/activityEdit"><a>Edit</a></Link>
				<form>
					<p>Delete</p>
				</form>
			</div>
			<p className={styles.title}>{props.name}</p>
			<p className={styles.subText}> {props.location}</p>
			<p className={styles.subText}> {props.date_going}</p>
			<p className={styles.subText}>{props.details}</p>
			<p className={styles.subText}><a href={props.url}>Visit WebSite</a></p>
			<p className={styles.subText}> {props.price_person}</p>
		</div>
	);
}
