import './App.css';
import { NavBar } from './components/widgets/NavBar/NavBar.jsx';
import { ItemListContainer } from './components/screens/ItemListContainer/ItemListContainer.jsx';
import { ItemDetailContainer } from './components/screens/ItemDetailContainer/ItemDetailContainer.jsx';

const App = props => {

  return <>
    <NavBar/>
    <ItemDetailContainer/>
  </>
}

export default App;
