import './App.css';
import { PageHeader } from './components/screens/PageHeader/PageHeader.jsx';
import { PageContent } from './components/screens/PageContent/PageContent.jsx';
import { PageFooter } from './components/screens/PageFooter/PageFooter.jsx';

const App = props => {

  return <>
    <PageHeader/>
    <PageContent/>
    <PageFooter/>
  </>
}

export default App;
