import Image from "next/image";
import Link from "next/link";
import styles from "./tripCard.module.css";
export default function TripCard(props) {
	return (
		<div className={styles.page}>
			<div className={styles.container}>
				<Link href="/">
					<a>
						<div className={styles.cardCont}>
							<div className={styles.tripImg}></div>
							<div className={styles.text}>
								<p className={styles.title}>Smoky Mountains</p>
								<p className={styles.subText}>
									{" "}
									Maggie Valley, North Carolina{" "}
								</p>
							</div>
						</div>
					</a>
				</Link>
			</div>
		</div>
	);
}
