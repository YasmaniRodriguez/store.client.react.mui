export const ItemListStyles = (theme) => {
	return {
		container: {
			padding: "20px 40px",
			display: "grid",
			gap: "2rem",
			gridAutoRows: "35rem",
			gridTemplateColumns: "repeat(auto-fill, minmax(25rem, 1fr))",
			transition: "transform 1.5s",
			"& :hover": {
				transform: "scale(1.02)",
			},
		},
	};
};
