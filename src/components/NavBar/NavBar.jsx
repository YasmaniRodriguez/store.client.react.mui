import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Typography, makeStyles } from "@material-ui/core";
import { CartWidget } from "../CartWidget/CartWidget";
import { BusinessContext } from "../../contexts/BusinessContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const useStyles = makeStyles((theme) => ({
	container: {
		minHeight: "10vh",
	},
}));

export const NavBar = (props) => {
	const { availableCategories } = useContext(BusinessContext);
	const classes = useStyles();

	//const matchesMobile = useMediaQuery("(max-width: 800px)");

	return (
		<header className={classes.container}>
			<nav className='navbar fixed-top navbar-expand-lg navbar-light bg-light'>
				<div className='container-fluid'>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarToggler'
						aria-controls='navbarToggler'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarToggler'>
						<Link className='navbar-brand' aria-current='page' to={"/"}>
							<Typography variant='h3'>Yeah!</Typography>
						</Link>
						<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
							{availableCategories.map((category, i) => {
								return (
									<li key={i} className='nav-item'>
										<Link
											className='nav-link active'
											aria-current='page'
											to={`/category/${category.id}`}>
											<Typography
												style={{ textTransform: "capitalize" }}
												variant='h4'>
												{category.name}
											</Typography>
										</Link>
									</li>
								);
							})}
						</ul>
					</div>
					<CartWidget />
				</div>
			</nav>
		</header>
	);
};
