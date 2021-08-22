import React from "react";
import { makeStyles, Typography, Avatar, IconButton } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import { CounterWidgetStyles } from "./CounterWidgetStyles";

const useStyles = makeStyles((theme) => CounterWidgetStyles(theme));

export const CounterWidget = ({ minQty, maxQty, qty: curQty, setQty }) => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<div className={classes.counter}>
				<Typography variant='h1' component='p'>
					{curQty}
				</Typography>
				<div className={classes.button}>
					<IconButton
						className={classes.cta}
						disabled={curQty === maxQty ? true : false}
						onClick={(e) => setQty(curQty + 1)}>
						<Avatar>
							<Add />
						</Avatar>
					</IconButton>
					<IconButton
						className={classes.cta}
						disabled={curQty === minQty ? true : false}
						onClick={(e) => setQty(curQty - 1)}>
						<Avatar>
							<Remove />
						</Avatar>
					</IconButton>
				</div>
			</div>
		</div>
	);
};
