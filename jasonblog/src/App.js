import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route, 
  Switch, 
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlesPage from './pages/ArticlesPage';
import NavBar from './NavBar';
import notFoundPage from './pages/notFoundPage';  
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <NavBar />
          <div id='page-body'>
          <Switch>
            <Route path="/" component={HomePage} exact/>
            <Route path="/about" component={AboutPage} />
            <Route path="/ArticlesList" component={ArticlesListPage} />
            <Route path="/articles/:name" component={ArticlesPage} />
            <Route component= {notFoundPage} />   
          </Switch>         
          </div>
      </div>
      </Router>
    );
  }
}

export default App;

