import './App.css';
import { NavBar } from './components/widgets/NavBar/NavBar.jsx';
import { ItemListContainer } from './components/screens/ItemListContainer/ItemListContainer.jsx';
import { ItemDetailContainer } from './components/screens/ItemDetailContainer/ItemDetailContainer.jsx';

export const categories = [
  { id: 'ctg01', name: 'pizzas'},
  { id: 'ctg02', name: 'tartas'},
  { id: 'ctg03', name: 'empanadas'},
  { id: 'ctg04', name: 'bebidas'}
];

const App = props => {

  return <>
    <NavBar/>
    <ItemListContainer/>
  </>
}

export default App;
