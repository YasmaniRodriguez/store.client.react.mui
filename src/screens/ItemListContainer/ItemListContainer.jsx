import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { BusinessContext } from "../../contexts/BusinessContext.js";
import { ItemList } from "../../components/ItemList/ItemList.jsx";
import { db } from "../../firebase/firebase";

export const ItemListContainer = () => {
	const classes = useStyles();
	const { id: onlyShowCategory } = useParams();
	const { setAvailableCategories, availableProducts, setAvailableProducts } =
		useContext(BusinessContext);

	useEffect(() => {
		const query = db.collection("categories");

		query.get().then((querySnapshot) => {
			const categories = querySnapshot.docs.map((category) => {
				const myData = category.data();
				const id = category.id;
				const obj = { ...myData, id };
				return obj;
			});
			setAvailableCategories(categories);
		});
	}, []);

	useEffect(() => {
		const query = onlyShowCategory
			? db.collection("products").where("category", "==", onlyShowCategory)
			: db.collection("products");

		query.get().then((querySnapshot) => {
			const products = querySnapshot.docs.map((product) => {
				const myData = product.data();
				const id = product.id;
				const obj = { ...myData, id };
				return obj;
			});
			setAvailableProducts(products);
		});
	}, [onlyShowCategory]);

	return (
		<section className={classes.container}>
			<ItemList products={availableProducts} />
		</section>
	);
};

const useStyles = makeStyles((theme) => ({
	container: {
		height: "70vh",
		width: "100vw",
		display: "flex",
	},
}));
