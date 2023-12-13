import { useState, useEffect } from "react";
import img1 from "../../../assets/img1.png";
import img2 from "../../../assets/img2.png";
import img3 from "../../../assets/img3.png";
import img4 from "../../../assets/img4.png";

function Gallery() {
	const portrait_style = "w-full h-auto flex-col mx-6 my-6";
	const image_style = "h-[95%] w-auto";
	const description_style =
		"bg-gray-800 rounded-b-2xl h-[5%] text-center font-inter text-lg text-white"; // Alterei aqui

	return (
		<div className="w-full h-full flex flex-row">
			<div className={portrait_style}>
				<div className={image_style}>
					<img src={img1} className="h-full w-auto" alt={"Consultório Pediatra"} />
				</div>
				<div className={description_style}>Consultório Pediatra</div>
			</div>
			<div className={portrait_style}>
				<div className={image_style}>
					<img src={img2} className="h-full w-auto" alt={"Sala de Exames"} />
				</div>
				<div className={description_style}>Sala de Exames</div>
			</div>
			<div className={portrait_style}>
				<div className={image_style}>
					<img src={img3} className="h-full w-auto" alt={"Consultório"} />
				</div>
				<div className={description_style}>Consultório</div>
			</div>
			<div className={portrait_style}>
				<div className={image_style}>
					<img src={img4} className="h-full w-auto" alt={"Leito"} />
				</div>
				<div className={description_style}>Leito</div>
			</div>
		</div>
	);
}

export default Gallery;
