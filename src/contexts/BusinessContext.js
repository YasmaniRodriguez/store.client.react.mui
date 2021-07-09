import React, { createContext, useState } from "react";

//creando el context:
export const BusinessContext = createContext();

//creando el provider:
export const BusinessContextProvider = ({ children }) => {
	const [availableCategories, setAvailableCategories] = useState([]);
	const [availableProducts, setAvailableProducts] = useState([]);

	const findProduct = (productId) =>
		availableProducts.find((product) => product.id === productId);

	const findCategory = (categoryId) =>
		availableCategories.find((category) => category.id === categoryId);

	const whereIsMyIcon = (categoryId) => {
		const category = findCategory(categoryId);
		return category.icon;
	};

	return (
		<BusinessContext.Provider
			value={{
				availableCategories,
				setAvailableCategories,
				availableProducts,
				setAvailableProducts,
				findProduct,
				findCategory,
				whereIsMyIcon,
			}}>
			{children}
		</BusinessContext.Provider>
	);
};
