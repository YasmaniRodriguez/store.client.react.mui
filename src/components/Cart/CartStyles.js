export const CartStyles = (theme) => {
	return {
		container: {
			height: "100vh",
			display: "grid",
			gap: "1rem",
			gridTemplateColumns: "repeat(auto-fit, minmax(30rem, 1fr))",
		},
		list: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			padding: "20px 20px",
			backgroundColor: "white",
		},
		summary: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-between",
		},
	};
};
