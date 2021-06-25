import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { BusinessContextProvider } from './components/contexts/BusinessContext.js';
import { NavBar } from './components/widgets/NavBar/NavBar.jsx';
import { ItemListContainerLayout } from './components/screens/ItemListContainer/ItemListContainer.jsx';
//import { ItemDetailContainer } from './components/screens/ItemDetailContainer/ItemDetailContainer.jsx';

const App = props => {

  return <>
    <BusinessContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <ItemListContainerLayout/>
          </Route>
          <Route path="/category/:onlyShowCategory">
            <ItemListContainerLayout/>
          </Route>
        </Switch>
    </BrowserRouter>      
    </BusinessContextProvider>
  </>
}

export default App;
