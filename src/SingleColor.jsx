import React, { useState, useEffect } from "react";
// import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
	const [alert, setAlert] = useState(false);
	const bcg = rgb.join(",");
	// const hex = rgbToHex(...rgb);
	// console.log(hexColor);

	useEffect(() => {
		const id = setTimeout(() => {
			setAlert(false);
		}, 3000);
		return () => clearTimeout(id);
	}, [alert]);

	function handleClick() {
		setAlert(true);
		navigator.clipboard.writeText(`#${hexColor}`);
	}
	return (
		<article
			className={`color ${index > 10 && "color-light"}`}
			style={{ backgroundColor: `rgb(${bcg})` }}
			onClick={handleClick}>
			<p className="percent-value">{weight}%</p>
			<p className="color-value">#{hexColor}</p>
			{alert && <p className="alert">copied to clipboard</p>}
		</article>
	);
};

export default SingleColor;
