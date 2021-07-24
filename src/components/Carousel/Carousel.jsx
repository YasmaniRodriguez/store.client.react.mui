import React from "react";
import { Typography, makeStyles, CircularProgress } from "@material-ui/core";
import { Item } from "../Item/Item.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const useStyles = makeStyles((theme) => ({
	container: {
		height: "20%",
		backgroundColor: "blue",
	},
	loadingContainer: {
		width: "100%",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	loadingText: {
		fontFamily: "Ranchers",
	},
}));

export const CarouselComponent = ({ availableProductsCombinations }) => {
	const classes = useStyles();
	return (
		<div
			id='carouselExampleControls'
			className='carousel slide'
			data-bs-ride='carousel'>
			{availableProductsCombinations.length === 0 ? (
				<div className={classes.loadingContainer}>
					<CircularProgress />
					<Typography className={classes.loadingText} variant='h3'>
						Cargando...
					</Typography>
				</div>
			) : (
				<div className='carousel-inner'>
					{availableProductsCombinations.map((combo, i) => (
						<div
							key={i}
							className={i === 0 ? "carousel-item active" : "carousel-item"}>
							<Item index={i} {...combo} />
						</div>
					))}
				</div>
			)}

			<button
				className='carousel-control-prev'
				type='button'
				data-bs-target='#carouselExampleControls'
				data-bs-slide='prev'>
				<span className='carousel-control-prev-icon' aria-hidden='true'></span>
				<span className='visually-hidden'>Previous</span>
			</button>
			<button
				className='carousel-control-next'
				type='button'
				data-bs-target='#carouselExampleControls'
				data-bs-slide='next'>
				<span className='carousel-control-next-icon' aria-hidden='true'></span>
				<span className='visually-hidden'>Next</span>
			</button>
		</div>
	);
};
