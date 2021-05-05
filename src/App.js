import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import '@progress/kendo-theme-bootstrap/dist/all.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from "./pages/home";
import News from "./pages/news";
import Info from "./pages/info";
import Notification from "./components/notifications";
import BottomNav from './components/bottomNav';



class App extends Component {

  render() {
    return (
      <div className="App">
        <HashRouter>
          <BottomNav>
            <Switch>
              <Route exact={true} path="/" component={Home} />
              <Route exact={true} path="/calendar" component={News} />
              <Route exact={true} path="/calendr" component={Info} />
              <Route exact={true} path="/profile" component={Notification} />
            </Switch>
          </BottomNav>
        </HashRouter>
      </div>
    );
  }
}

export default App;