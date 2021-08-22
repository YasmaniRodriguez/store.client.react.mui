import React, { useContext } from "react";
import { BusinessContext } from "../../contexts/BusinessContext";
import { Link } from "react-router-dom";
import { Typography, makeStyles, useMediaQuery } from "@material-ui/core";
import { DeliveryWidget } from "../DeliveryWidget/DeliveryWidget";
import { CartWidget } from "../CartWidget/CartWidget";
import { NavBarStyles } from "./NavBarStyles";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

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
				<ul
					style={{
						width: "100%",
						justifyContent: "space-between",
					}}
					className='navbar-nav ml-auto'>
					<div
						style={
							matchesMobile
								? { display: "flex", flexDirection: "column" }
								: { display: "flex", flexDirection: "row" }
						}>
						<li className='nav-item'>
							<Link
								className='nav-link'
								to={`/category/H7goUAw8f2LJEpDuKGyk`}
								style={{ display: "flex" }}>
								<img alt='icono categoria pizzas' src={getMyIcon("ctg01")} />
								<Typography variant='h5' component='p'>
									Pizzas
								</Typography>
							</Link>
						</li>

						<li className='nav-item'>
							<Link
								className='nav-link'
								to={`/category/8gzxJbPJeQK3eOe4FzUx`}
								style={{ display: "flex" }}>
								<img alt='icono categoria tartas' src={getMyIcon("ctg02")} />
								<Typography variant='h5' component='p'>
									Tartas
								</Typography>
							</Link>
						</li>

						<li className='nav-item'>
							<Link
								className='nav-link'
								to={`/category/xKNLNVyuKst3owmdPkYR`}
								style={{ display: "flex" }}>
								<img alt='icono categoria empanadas' src={getMyIcon("ctg03")} />
								<Typography variant='h5' component='p'>
									Empanadas
								</Typography>
							</Link>
						</li>

						<li className='nav-item'>
							<Link
								className='nav-link'
								to={`/category/ejrgaOJODuoC7c0tbJTE`}
								style={{ display: "flex" }}>
								<img alt='icono categoria bebidas' src={getMyIcon("ctg04")} />
								<Typography variant='h5' component='p'>
									Bebidas
								</Typography>
							</Link>
						</li>
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
