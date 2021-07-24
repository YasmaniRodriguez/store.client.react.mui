import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { BusinessContext } from "../../contexts/BusinessContext.js";
import { ItemList } from "../../components/ItemList/ItemList.jsx";
import { CarouselComponent } from "../../components/Carousel/Carousel.jsx";
import { db } from "../../firebase/firebase";

const useStyles = makeStyles((theme) => ({
	container: {
		height: "100vh",
		padding: "20px 40px",
	},
}));

export const ItemListContainer = () => {
	const classes = useStyles();
	const { id: onlyShowCategory } = useParams();
	const {
		setAvailableCategories,
		availableProducts,
		setAvailableProducts,
		availableProductsCombinations,
		setAvailableProductsCombinations,
	} = useContext(BusinessContext);

	useEffect(() => {
		const query = db.collection("categories");

		query
			.get()
			.then((querySnapshot) => {
				const categories = querySnapshot.docs.map((category) => {
					const myData = category.data();
					const id = category.id;
					const obj = { ...myData, id };
					return obj;
				});
				setAvailableCategories(categories);
			})
			.catch((error) => console.log(error));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		const query = db
			.collection("products")
			.where("category", "==", "lFsX5wIkyiZ7PEiDUjeE");

		query
			.get()
			.then((querySnapshot) => {
				const products = querySnapshot.docs.map((product) => {
					const myData = product.data();
					const id = product.id;
					const obj = { ...myData, id };
					return obj;
				});
				setAvailableProductsCombinations(products);
			})
			.catch((error) => console.log(error));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		const query = onlyShowCategory
			? db.collection("products").where("category", "==", onlyShowCategory)
			: db
					.collection("products")
					.where("category", "!=", "lFsX5wIkyiZ7PEiDUjeE");

		query
			.get()
			.then((querySnapshot) => {
				const products = querySnapshot.docs.map((product) => {
					const myData = product.data();
					const id = product.id;
					const obj = { ...myData, id };
					return obj;
				});
				setAvailableProducts(products);
			})
			.catch((error) => console.log(error));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [onlyShowCategory]);

	return (
		<section className={classes.container}>
			{onlyShowCategory ? (
				<ItemList availableProducts={availableProducts} />
			) : (
				<>
					<CarouselComponent
						availableProductsCombinations={availableProductsCombinations}
					/>
					{<ItemList availableProducts={availableProducts} />}
				</>
			)}
		</section>
	);
};
