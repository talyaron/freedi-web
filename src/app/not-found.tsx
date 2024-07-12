import Link from "next/link";

import "./appStyle.scss";
import Image from "next/image";

import cableA from "@/assets/Images/Cable A.png";
import cableB from "@/assets/Images/Cable B.png";
import RoundedButton from "@/components/buttons/RoundedButton";

export default function NotFound() {
	return (
		<div className="notFound">
			<h1 className="notFound__title">404</h1>
			<div className="notFound__imgBox">
				<Image
					alt="404-page-left-image"
					src={cableA}
					sizes="50vw"
					style={{ width: "50vw", height: "auto" }}
				/>
				<Image
					alt="404-page-left-image"
					src={cableB}
					sizes="50vw"
					style={{ width: "50vw", height: "auto" }}
				/>
			</div>
			<h4>Sorry, Page not found</h4>

			<Link href={`/`}>
				<RoundedButton text="Go to Homepage" />
			</Link>

			<p className="notFound__footer">
                From the Institute for Deliberative Democracy
			</p>
		</div>
	);
}
