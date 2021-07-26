import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core";
import { Item } from "../Item/Item.jsx";

const useStyles = makeStyles((theme) => ({
	container: {
		padding: "20px 40px",
		display: "grid",
		gap: "2rem",
		gridAutoRows: "35rem",
		gridTemplateColumns: "repeat(auto-fill, minmax(25rem, 1fr))",
		transition: "transform 1.5s",
		"& :hover": {
			transform: "scale(1.02)",
		},
	},
}));

export const ItemList = ({ availableProducts }) => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			{availableProducts.map((product, i) => (
				<Fragment key={i}>
					<Item index={i} {...product} />
				</Fragment>
			))}
		</div>
	);
};
