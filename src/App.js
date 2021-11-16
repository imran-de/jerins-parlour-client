import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/LandingPage/Home/Home';
import NotFound from './Pages/404/NotFound';
import Login from './Pages/Login/Login/Login';
import CreateAccount from './Pages/Login/CreateAccount/CreateAccount';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/create-account">
            <CreateAccount />
          </Route>


          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
