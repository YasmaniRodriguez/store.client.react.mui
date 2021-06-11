import './App.css';
import { PageHeader } from './components/layouts/PageHeader/PageHeader.jsx';
import { PageContent } from './components/layouts/PageContent/PageContent.jsx';
import { PageFooter } from './components/layouts/PageFooter/PageFooter.jsx';

const App = props => {

  return <>
    <PageHeader/>
    <PageContent/>
    <PageFooter/>
  </>
}

export default App;
