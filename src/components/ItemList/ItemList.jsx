import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core";
import { Item } from "../Item/Item.jsx";

const useStyles = makeStyles((theme) => ({
	container: {
		//backgroundColor: "rgb(249 248 248)",
		padding: "20px 40px",
		//border: "solid 5px yellow",
		display: "grid",
		gap: "2rem",
		gridAutoRows: "22rem",
		gridTemplateColumns: "repeat(auto-fill, minmax(17rem, 1fr))",
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
