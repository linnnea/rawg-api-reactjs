import Home from './pages/Home';
import GlobalStyles from './components/GlobalStyles';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <h1>RAWG</h1>
      <Home />
    </div>
  );
}

export default App;
