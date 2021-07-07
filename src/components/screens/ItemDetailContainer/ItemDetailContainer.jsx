import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { BusinessContext } from "../../contexts/BusinessContext.js";
import { CartContext } from "../../contexts/CartContext.js";
import { makeStyles } from "@material-ui/core";
import { ItemDetail } from "../../widgets/ItemDetail/ItemDetail.jsx";
import { db } from "../../../firebase/firebase.js";
/*
Este es un componente contenedor de primer nivel y su responsabilidad es buscar con array.find()
dentro de las lista Productos disponibilizaos en el BusinessContext, aquel que coincida 
con valor del parametro onlyShowProduct que recibo por useParams() y asi pasarselos por props 
al componente dummy encargado de la visualizacion.
*/
export const ItemDetailContainer = (props) => {
	const classes = useStyles();
	const { id: onlyShowProduct } = useParams();
	//const { findProduct } = useContext(BusinessContext);
	const [quantity, setQuantity] = useState(1);
	const [showCheckOutButton, setShowCheckOutButton] = useState(false);
	const { newOrderRow } = useContext(CartContext);
	const { setNewOrderRow } = useContext(CartContext);
	const { resetNewOrderRow } = useContext(CartContext);
	const { addOrderRow } = useContext(CartContext);
	const { removeOrderRow } = useContext(CartContext);

	const [selectedProduct, setSelectedProduct] = useState({});

	const [amount, setAmount] = useState(0);

	const calcAmount = () => {
		return new Promise((resolve, reject) => {
			resolve(selectedProduct.price * quantity);
		});
	};

	const myProducts = () => {
		return new Promise((resolve, reject) => {
			const obj = db
				.collection("products")
				.where("pdtid", "==", onlyShowProduct);
			if (obj.length === 0) {
				reject(new Error("No se encontró el producto"));
			} else {
				obj.get().then((querySnapshot) => {
					querySnapshot.forEach((doc) => {
						resolve(doc.data());
					});
				});
			}
		});
	};

	useEffect(() => {
		async function getProducts() {
			try {
				const product = await myProducts();
				setSelectedProduct(product);
			} catch (err) {
				console.log(err.message);
			}
		}
		getProducts();
	}, []);

	useEffect(() => {}, [selectedProduct]);

	// useEffect(() => {
	// 	async function getOrderRow() {
	// 		await setNewOrderRow({
	// 			product: selectedProduct,
	// 			quantity: quantity,
	// 			amount: amount,
	// 		});
	// 	}
	// 	getOrderRow();
	// }, [quantity]);

	return (
		<section className={classes.container}>
			<ItemDetail
				product={selectedProduct}
				qty={quantity}
				setQty={setQuantity}
				showCheckOut={showCheckOutButton}
				setShowCheckOut={setShowCheckOutButton}
				addToOrder={addOrderRow}
				removeToOrder={removeOrderRow}
				newOrderRow={newOrderRow}
				resetNewOrderRow={resetNewOrderRow}
			/>
		</section>
	);
};

const useStyles = makeStyles((theme) => ({
	container: {
		width: "100vw",
		display: "flex",
	},
}));
