import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { BusinessContextProvider } from './components/contexts/BusinessContext.js';
import { NavBar } from './components/widgets/NavBar/NavBar.jsx';
import { ItemListContainer } from './components/screens/ItemListContainer/ItemListContainer.jsx';
import { ItemDetailContainer } from './components/screens/ItemDetailContainer/ItemDetailContainer.jsx';
import { Cart } from './components/screens/Cart/Cart.jsx';

const App = props => {

  return <>
    <BusinessContextProvider>
      <BrowserRouter>
      <NavBar/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer/>
          </Route>
          <Route excat path="/category/:id">
            <ItemListContainer/>
          </Route>
          <Route excat path="/product/:id">
            <ItemDetailContainer/>
          </Route>
          <Route excat path="/cart">
            <Cart/>
          </Route>
        </Switch>
    </BrowserRouter>      
    </BusinessContextProvider>
  </>
}

export default App;
