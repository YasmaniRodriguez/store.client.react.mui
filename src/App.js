import './App.css';
import { NavBar } from './components/widgets/NavBar/NavBar.jsx';
import { ItemListContainer } from './components/screens/ItemListContainer/ItemListContainer.jsx'

const App = props => {

  return <>
    <NavBar/>
    <ItemListContainer/>
  </>
}

export default App;
