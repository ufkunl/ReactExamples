import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Users from "./component/Users";
import User from "./component/User";
import Home from "./component/Home";
import About from "./component/About";
import Error404 from "./component/Error404";
import Nav from "./nav";

function App() {
  return (
    <Router>
      <div>
        <Nav></Nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about" component= {About}/>
          <Route path="/users" component= {Users}/>
          <Route path="/user/:id" component= {User}/>
          <Route path="*" component= {Error404}/>
          <Route exact path="/" component= {Home}/>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
