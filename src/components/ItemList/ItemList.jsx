import React, { Fragment } from "react";
import { Typography, makeStyles } from "@material-ui/core";
import { Item } from "../Item/Item.jsx";

const useStyles = makeStyles((theme) => ({
	loadingContainer: {
		width: "100%",
		height: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	loadingText: {
		fontFamily: "Ranchers",
	},
	productsContainer: {
		display: "grid",
		gap: "2rem",
		gridAutoRows: "22rem",
		gridTemplateColumns: "repeat(auto-fill, minmax(17rem, 1fr))",
	},
}));

export const ItemList = ({ products }) => {
	const classes = useStyles();

	return (
		<>
			{products.length === 0 ? (
				<div className={classes.loadingContainer}>
					<Typography className={classes.loadingText} variant='h3'>
						Cargando...
					</Typography>
				</div>
			) : (
				<div className={classes.productsContainer}>
					{products.map((product, i) => (
						<Fragment key={i}>
							<Item index={i} {...product} />
						</Fragment>
					))}
				</div>
			)}
		</>
	);
};
