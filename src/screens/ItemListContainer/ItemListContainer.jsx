import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, makeStyles, CircularProgress } from "@material-ui/core";
import { ItemList } from "../../components/ItemList/ItemList";
import { db } from "../../firebase/firebase";
import { ItemListContainerStyles } from "./ItemListContainerStyles";

const useStyles = makeStyles((theme) => ItemListContainerStyles(theme));

export const ItemListContainer = () => {
	const classes = useStyles();
	const { id: showCategory } = useParams();
	const [availableProducts, setAvailableProducts] = useState([]);

	useEffect(() => {
		const query = showCategory
			? db.collection("products").where("category", "==", showCategory)
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
	}, [showCategory]);

	return (
		<section className={classes.container}>
			{showCategory ? (
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
