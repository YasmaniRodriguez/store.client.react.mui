import React, { useContext } from "react";
import { BusinessContext } from "../../contexts/BusinessContext";
import { Link } from "react-router-dom";
import { Typography, makeStyles, useMediaQuery } from "@material-ui/core";
import { DeliveryWidget } from "../DeliveryWidget/DeliveryWidget";
import { CartWidget } from "../CartWidget/CartWidget";
import { NavBarStyles } from "./NavBarStyles";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const availableCategories = [
	{ code: "H7goUAw8f2LJEpDuKGyk", name: "pizzas", type: "ctg01" },
	{ code: "8gzxJbPJeQK3eOe4FzUx", name: "tartas", type: "ctg02" },
	{ code: "xKNLNVyuKst3owmdPkYR", name: "empanadas", type: "ctg03" },
	{ code: "ejrgaOJODuoC7c0tbJTE", name: "bebidas", type: "ctg04" },
];
const useStyles = makeStyles((theme) => NavBarStyles(theme));

export const NavBar = () => {
	const classes = useStyles();
	const matchesMobile = useMediaQuery("(max-width: 991px)");
	const { getMyIcon } = useContext(BusinessContext);

	return (
		<nav
			className={`navbar sticky-top navbar-expand-lg navbar-mainbg ${classes.container}`}>
			<Link className='navbar-brand navbar-logo' to={"/"}>
				<Typography variant='h3' component='p'>
					YaEstamosAlHorno!
				</Typography>
			</Link>
			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarSupportedContent'
				aria-controls='navbarSupportedContent'
				aria-expanded='false'
				aria-label='Toggle navigation'>
				<i className='fas fa-bars text-white'></i>
			</button>

			<div className='collapse navbar-collapse' id='navbarSupportedContent'>
				<ul className='navbar-nav ml-auto'>
					<div
						style={
							matchesMobile
								? { display: "flex", flexDirection: "column" }
								: { display: "flex", flexDirection: "row" }
						}>
						{availableCategories.map((category, i) => (
							<li key={i} className='nav-item'>
								<Link className='nav-link' to={`/category/${category.code}`}>
									<img
										alt={`Categoria ${category.name}`}
										src={getMyIcon(category.type)}
									/>
									<Typography variant='h5' component='p'>
										{category.name}
									</Typography>
								</Link>
							</li>
						))}
					</div>

					<div className={classes.actions}>
						<DeliveryWidget />
						<CartWidget />
					</div>
				</ul>
			</div>
		</nav>
	);
};
