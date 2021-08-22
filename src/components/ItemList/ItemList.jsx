import React from "react";
import { makeStyles } from "@material-ui/core";
import { Item } from "../Item/Item.jsx";
import { ItemListStyles } from "./ItemListStyles";

const useStyles = makeStyles((theme) => ItemListStyles(theme));

export const ItemList = ({ availableProducts }) => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			{availableProducts.map((product, i) => (
				<Item key={i} {...product} />
			))}
		</div>
	);
};
