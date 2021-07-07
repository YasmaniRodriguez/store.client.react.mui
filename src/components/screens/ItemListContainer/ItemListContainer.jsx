import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { BusinessContext } from "../../contexts/BusinessContext.js";
import { makeStyles } from "@material-ui/core";
import { ItemList } from "../../widgets/ItemList/ItemList.jsx";
import { db } from "../../../firebase/firebase";
/*
Este es un componente contenedor de primer nivel y su responsabilidad es conectarse a los 
endpoints correspondientes para conseguir las Categorias y Productos disponibles y filtrarlos
segun el criterior que se defina. Y dado que estas son el core del modelo de negocios planteado, 
seran disponibilizadas en el BusinessContext.
*/
const useStyles = makeStyles((theme) => ({
	container: {
		height: "70vh",
		width: "100vw",
		display: "flex",
	},
}));

export const ItemListContainer = () => {
	const classes = useStyles();

	const { setAvailableCategories, availableProducts, setAvailableProducts } =
		useContext(BusinessContext);

	useEffect(() => {
		const myCategories = db.collection("categories");
		myCategories
			.get()
			.then((querySnapshot) => {
				setAvailableCategories(querySnapshot.docs.map((doc) => doc.data()));
			})
			.catch((error) => console.log("Error + ", error));
	}, []);

	useEffect(() => {
		const myProducts = db.collection("products");
		myProducts
			.get()
			.then((querySnapshot) => {
				setAvailableProducts(querySnapshot.docs.map((doc) => doc.data()));
			})
			.catch((error) => {
				console.log("Error buscando las productos", error);
			});
	}, []);

	const { id: onlyShowCategory } = useParams();

	const filterProducts = () => {
		return onlyShowCategory !== undefined
			? availableProducts.filter(
					(product) => product.category === onlyShowCategory
			  )
			: availableProducts;
	};

	return (
		<section className={classes.container}>
			<ItemList products={filterProducts()} />
		</section>
	);
};
