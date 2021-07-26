import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Typography, makeStyles, CircularProgress } from "@material-ui/core";
import { BusinessContext } from "../../contexts/BusinessContext.js";
import { ItemList } from "../../components/ItemList/ItemList.jsx";
import { db } from "../../firebase/firebase";

const useStyles = makeStyles((theme) => ({
	container: {
		minHeight: "100vh",
		display: "flex",
		flexDirection: "column",
		backgroundColor: "rgb(253 247 247)",
		"& h5": {
			padding: "5px 0px",
			alignSelf: "center",
			backgroundColor: "rgb(154 151 151)",
			width: "100%",
			textAlign: "center",
			textTransform: "uppercase",
			color: "white",
			fontFamily: "Ranchers",
		},
	},
	loading: {
		width: "100vw",
		height: "100vh",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		"& h3": {
			fontFamily: "Ranchers",
		},
	},
}));

export const ItemListContainer = () => {
	const classes = useStyles();
	const { id: onlyShowCategory } = useParams();
	const { setAvailableCategories, availableProducts, setAvailableProducts } =
		useContext(BusinessContext);

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
		const query = onlyShowCategory
			? db.collection("products").where("category", "==", onlyShowCategory)
			: db.collection("products");

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
					{availableProducts.length === 0 ? (
						<div className={classes.loading}>
							<CircularProgress />
							<Typography variant='h3'>Cargando...</Typography>
						</div>
					) : (
						<div>
							<ItemList availableProducts={availableProducts} />
						</div>
					)}
				</>
			)}
		</section>
	);
};
