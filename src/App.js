import './App.css';
import { PageHeader } from './components/layouts/PageHeader';
import { PageContent } from './components/layouts/PageContent';
import { PageFooter } from './components/layouts/PageFooter';

const App = props => {

  return <>
    <PageHeader/>
    <PageContent/>
    <PageFooter/>
  </>
}

export default App;
