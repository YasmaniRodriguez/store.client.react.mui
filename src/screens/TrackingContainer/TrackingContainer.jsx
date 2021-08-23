import React, { useState } from "react";
import { Typography, makeStyles, CircularProgress } from "@material-ui/core";
import { DialogComponent } from "../../components/Dialog/Dialog";
import { SnackBarComponent } from "../../components/SnackBar/SnackBar";
import { Tracking } from "../../components/Tracking/Tracking";
import { db } from "../../firebase/firebase";
import { TrackingContainerStyles } from "./TrackingContainerStyles";

const useStyles = makeStyles((theme) => TrackingContainerStyles(theme));

export const TrackingContainer = (props) => {
	const classes = useStyles();

	const [checkedOrder, setCheckedOrder] = useState({});
	const [openDialog, setOpenDialog] = useState(false);
	const [openSnackBar, setOpenSnackBar] = useState(false);
	const [orderToCheck, setOrderToCheck] = useState();

	const changeOrderToCheck = (e) => {
		setOrderToCheck(e.target.value);
	};

	const getOrderTracking = () => {
		const query = db.collection("orders").doc(orderToCheck);
		if (orderToCheck) {
			query
				.get()
				.then((doc) => {
					if (!doc.exists) {
						setOpenSnackBar(true);
					} else {
						setCheckedOrder({ id: doc.id, ...doc.data() });
						setOpenDialog(true);
					}
				})
				.catch((error) => console.log(error));
		} else {
			setOpenSnackBar(true);
		}
	};

	return (
		<section className={classes.container}>
			<article className={classes.tracking}>
				<Tracking
					orderToCheck={orderToCheck}
					changeOrderToCheck={changeOrderToCheck}
					getOrderTracking={getOrderTracking}
				/>
			</article>
			<div className={classes.dialogContainer}>
				<DialogComponent
					open={openDialog}
					openDialog={setOpenDialog}
					handleConfirm={() => setOpenDialog(false)}
					closeDialog={() => setOpenDialog(false)}
					title={`${orderToCheck}`}
					labelPrimaryButton='Aceptar'>
					{checkedOrder ? (
						<Typography variant='h5' component='p'>
							En Preparación
						</Typography>
					) : (
						<CircularProgress />
					)}
				</DialogComponent>
			</div>

			<SnackBarComponent
				open={openSnackBar}
				message={`La Orden ${orderToCheck} no existe!`}
				openSnackBar={setOpenSnackBar}
			/>
		</section>
	);
};
