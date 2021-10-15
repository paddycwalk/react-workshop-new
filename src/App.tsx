import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from 'components/organisms/NavBar/NavBar';
import Home from 'pages/Home/Home';
import './App.scss';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
