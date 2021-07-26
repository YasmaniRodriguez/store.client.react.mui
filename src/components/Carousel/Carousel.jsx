import React from "react";
import { makeStyles, useMediaQuery } from "@material-ui/core";
import { Item } from "../Item/Item.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		//backgroundColor: "rgb(154 151 151)",
		justifyContent: "space-around",
		alignItems: "center",
		padding: "10px 10px",
		height: "100%",
		"& .carousel-inner": {
			width: "100%",
		},
		"& .carousel-item": {},
	},
}));

export const CarouselComponent = ({ availableProductsCombinations }) => {
	const classes = useStyles();
	const matchesMobile = useMediaQuery("(max-width: 991px)");
	return (
		<>
			{!matchesMobile ? (
				<div className={classes.container}>
					{availableProductsCombinations.map((combo, i) => (
						<div key={i}>
							<Item index={i} {...combo} />
						</div>
					))}
				</div>
			) : (
				<div
					id='carouselExampleFade'
					className={`carousel slide carousel-fade ${classes.container}`}
					data-bs-ride='carousel'>
					<div className='carousel-inner'>
						{availableProductsCombinations.map((combo, i) => (
							<div
								key={i}
								className={i === 0 ? "carousel-item active" : "carousel-item"}>
								<Item index={i} {...combo} />
							</div>
						))}
					</div>

					<button
						className='carousel-control-prev'
						type='button'
						data-bs-target='#carouselExampleFade'
						data-bs-slide='prev'>
						<span
							className='carousel-control-prev-icon'
							aria-hidden='true'></span>
						<span className='visually-hidden'>Previous</span>
					</button>
					<button
						className='carousel-control-next'
						type='button'
						data-bs-target='#carouselExampleFade'
						data-bs-slide='next'>
						<span
							className='carousel-control-next-icon'
							aria-hidden='true'></span>
						<span className='visually-hidden'>Next</span>
					</button>
				</div>
			)}
		</>
	);
};
