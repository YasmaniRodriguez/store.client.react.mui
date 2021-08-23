export const DialogStyles = (theme) => {
	return {
		container: {
			"& .MuiPaper-root": {
				padding: "1em !important",
				borderRadius: "1em !important",
			},
			"& .MuiDialogTitle-root": {
				paddingBottom: "0 !important",
			},
			"& .MuiDialogActions-root": {
				marginTop: "1em",
			},
			"& .MuiTypography-root": {
				fontFamily: "Ranchers !important",
				textAlign: "center",
			},
		},
		actions: {
			display: "flex",
			justifyContent: "center",
			"& button": {
				lineHeight: "2.65em",
				height: "2.5em",
				minWidth: "8em!important",
				borderRadius: "1.5em!important",
				textTransform: "capitalize",
			},
			"& button:nth-child(1)": {
				color: "#fff",
				backgroundColor: "#0d47a1",
				"&:disabled": {
					backgroundColor: "#174da082 !important",
				},
			},
		},
		title: { paddingBottom: "0 !important" },
	};
};
