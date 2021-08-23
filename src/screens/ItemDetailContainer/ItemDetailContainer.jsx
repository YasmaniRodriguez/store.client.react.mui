import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { CartContext } from "../../contexts/CartContext";
import { ItemDetail } from "../../components/ItemDetail/ItemDetail";
import { db } from "../../firebase/firebase";
import { ItemDetailContainerStyles } from "./ItemDetailContainerStyles";

const useStyles = makeStyles((theme) => ItemDetailContainerStyles(theme));

export const ItemDetailContainer = (props) => {
	const classes = useStyles();
	const { id: onlyShowProduct } = useParams();
	const [quantity, setQuantity] = useState(1);
	const [showCheckOut, setShowCheckOut] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState({});
	const { addItemToCart, calcRowAmount } = useContext(CartContext);

	useEffect(() => {
		const query = db.collection("products").doc(onlyShowProduct);

		query
			.get()
			.then((doc) => {
				setSelectedProduct({ id: doc.id, ...doc.data() });
			})
			.catch((error) => console.log(error));
	}, [onlyShowProduct]);

	return (
		<section className={classes.container}>
			<ItemDetail
				selectedProduct={selectedProduct}
				quantity={quantity}
				addItemToCart={addItemToCart}
				calcRowAmount={calcRowAmount}
				setQuantity={setQuantity}
				showCheckOut={showCheckOut}
				setShowCheckOut={setShowCheckOut}
			/>
		</section>
	);
};
