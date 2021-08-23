export const TrackingStyles = (theme) => {
	return {
		container: {
			padding: "10px 20px",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			"& p": {
				fontFamily: "Ranchers",
			},
			"& .MuiFormHelperText-root": {
				alignSelf: "center",
				fontFamily: "Ranchers",
			},
			"& .MuiButton-label": {
				fontFamily: "Ranchers",
			},
			"& .MuiInput-input": {
				textAlign: "center",
				fontFamily: "Ranchers",
			},
		},
		helperTextStyles: {
			padding: "20px 0px",
			alignSelf: "center",
		},
	};
};
