import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { NavBar } from './components/widgets/NavBar/NavBar.jsx';
import { ItemListContainer } from './components/screens/ItemListContainer/ItemListContainer.jsx';
import { ItemDetailContainer } from './components/screens/ItemDetailContainer/ItemDetailContainer.jsx';

const App = props => {

  return <BrowserRouter>
  <NavBar/>
    <Switch>
      <Route exact path="/">
         <ItemListContainer/>
      </Route>
      <Route path="/category/:ctgid">
          <ItemListContainer/>
      </Route>
      <Route path="/product/:pdtid">
          <ItemDetailContainer/>
      </Route>
    </Switch>
  </BrowserRouter>
}

export default App;
