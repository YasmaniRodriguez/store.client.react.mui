import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import {
	Toolbar,
	AppBar,
	Typography,
	makeStyles,
	IconButton,
	Avatar,
	useMediaQuery,
} from "@material-ui/core";
import { CartWidget } from "../CartWidget/CartWidget";
import { Menu } from "@material-ui/icons";
import { BusinessContext } from "../../contexts/BusinessContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const buttonCommonStyles = {
	alignSelf: "center",
	marginRight: "1em",
	fontSize: "1.2em",
	borderRadius: "50px",
	color: "white",
	padding: "0.5em 1em",
	cursor: "pointer",
	transition: "opacity 0.2s ease",
	textTransform: "none",
	background: "none",
};

const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",
		"& > button": {
			...buttonCommonStyles,
		},
		"& h2": {
			fonSize: "clamp(2rem,100%,3.75rem)",
			color: "white",
			fontFamily: "Ranchers",
		},
	},
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	filter: {
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",
	},
	category: {
		display: "flex",

		"& > *": {
			margin: theme.spacing(1),
		},
		"& .MuiIconButton-label": {
			display: "flex",
			flexDirection: "column",
		},
		"& .MuiButtonBase-root": {
			borderRadius: "0 !important",
		},
		"& .MuiAvatar-root": {
			backgroundColor: theme.palette.background.paper,
		},
		"& p": {
			textTransform: "uppercase",
		},
	},
	avatar: {
		width: theme.spacing(8),
		height: theme.spacing(8),
		boxShadow: "0 3px 10px rgb(0 0 0 / 0.2);",
	},
}));

export const NavBar = (props) => {
	const { availableCategories } = useContext(BusinessContext);
	const classes = useStyles();

	//const matchesMobile = useMediaQuery("(max-width: 800px)");

	return (
		<CustomNavBar />
		// <>
		// 	<header className={classes.container}>
		// 		<div className={classes.root}>
		// 			<AppBar position='fixed'>
		// 				<Toolbar>
		// 					<IconButton
		// 						edge='start'
		// 						className={classes.menuButton}
		// 						color='inherit'
		// 						aria-label='menu'>
		// 						<Menu />
		// 					</IconButton>
		// 					<Link to={"/"} style={{ textDecoration: "none" }}>
		// 						<Typography variant='h2'>Yeah!</Typography>
		// 					</Link>
		// 					<CartWidget />
		// 				</Toolbar>
		// 			</AppBar>
		// 		</div>
		// 	</header>
		// 	<nav className={classes.filter}>
		// 		<ButtonsOfCategoryFilters availableCategories={availableCategories} />
		// 	</nav>
		// </>
	);
};

const ButtonsOfCategoryFilters = ({ availableCategories }) => {
	const { whereIsMyIcon } = useContext(BusinessContext);
	return (
		<>
			{availableCategories.map((category, i) => {
				return (
					<CategoryAvatarButton
						key={i}
						id={category.id}
						icon={whereIsMyIcon(category.id)}
						name={category.name}
					/>
				);
			})}
		</>
	);
};

const CategoryAvatarButton = ({ id, icon, name }) => {
	const history = useHistory();
	const classes = useStyles();

	return (
		<IconButton
			className={classes.category}
			aria-label={name}
			onClick={() => history.push(`/category/${id}`)}>
			<Avatar src={icon} className={classes.avatar} color='white' />
			<Typography variant='h3' component='p'>
				{name}
			</Typography>
		</IconButton>
	);
};

const CustomNavBar = (props) => {
	return (
		<nav class='navbar fixed-top navbar-expand-lg navbar-light bg-light'>
			<div class='container-fluid'>
				<button
					class='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarTogglerDemo01'
					aria-controls='navbarTogglerDemo01'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span class='navbar-toggler-icon'></span>
				</button>
				<div class='collapse navbar-collapse' id='navbarTogglerDemo01'>
					<a class='navbar-brand' href='#'>
						Yeah!
					</a>
					<ul class='navbar-nav me-auto mb-2 mb-lg-0'>
						<li class='nav-item'>
							<a class='nav-link active' aria-current='page' href='#'>
								Home
							</a>
						</li>
						<li class='nav-item'>
							<a class='nav-link' href='#'>
								Link
							</a>
						</li>
					</ul>
				</div>
				<CartWidget />
			</div>
		</nav>
	);
};
