import React from "react";
import { makeStyles, Typography, Avatar, IconButton } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	counter: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		display: "flex",
		flexDirection: "column",
		padding: "0px 5px",
	},
	cta: {
		padding: "1px 1px",
	},
}));

export const CounterWidget = ({ minQty, maxQty, qty: curQty, setQty }) => {
	const classes = useStyles();
	const incrementQuantity = () => {
		curQty === maxQty ? setQty(maxQty) : setQty(curQty + 1);
	};

	const decrementQuantity = () => {
		curQty === minQty ? setQty(minQty) : setQty(curQty - 1);
	};

	return (
		<div className={classes.container}>
			<div className={classes.counter}>
				<Typography variant='h1' component='p'>
					{curQty}
				</Typography>
				<div className={classes.button}>
					<IconButton
						className={classes.cta}
						onClick={(e) => incrementQuantity()}>
						<Avatar>
							<Add />
						</Avatar>
					</IconButton>
					<IconButton
						className={classes.cta}
						onClick={(e) => decrementQuantity()}>
						<Avatar>
							<Remove />
						</Avatar>
					</IconButton>
				</div>
			</div>
		</div>
	);
};
