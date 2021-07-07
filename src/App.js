import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { BusinessContextProvider } from "./contexts/BusinessContext.js";
import { CartContextProvider } from "./contexts/CartContext.js";
import { NavBar } from "./components/NavBar/NavBar.jsx";
import { ItemListContainer } from "./screens/ItemListContainer/ItemListContainer.jsx";
import { ItemDetailContainer } from "./screens/ItemDetailContainer/ItemDetailContainer.jsx";
import { Cart } from "./screens/Cart/Cart.jsx";

const App = (props) => {
	return (
		<>
			<BusinessContextProvider>
				<CartContextProvider>
					<BrowserRouter>
						<NavBar />
						<Switch>
							<Route exact path='/'>
								<ItemListContainer />
							</Route>
							<Route excat path='/category/:id'>
								<ItemListContainer />
							</Route>
							<Route excat path='/product/:id'>
								<ItemDetailContainer />
							</Route>
							<Route excat path='/cart'>
								<Cart />
							</Route>
						</Switch>
					</BrowserRouter>
				</CartContextProvider>
			</BusinessContextProvider>
		</>
	);
};

export default App;
