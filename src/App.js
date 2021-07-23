import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { BusinessContextProvider } from "./contexts/BusinessContext";
import { CartContextProvider } from "./contexts/CartContext";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import { ItemListContainer } from "./screens/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./screens/ItemDetailContainer/ItemDetailContainer";
import { CartContainer } from "./screens/CartContainer/CartContainer";
import { TrackingContainer } from "./screens/TrackingContainer/TrackingContainer";

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
							<Route excat path='/tracking'>
								<TrackingContainer />
							</Route>
							<Route excat path='/cart'>
								<CartContainer />
							</Route>
						</Switch>
						<Footer />
					</BrowserRouter>
				</CartContextProvider>
			</BusinessContextProvider>
		</>
	);
};

export default App;
