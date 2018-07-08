import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Router, Route  } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Button from 'material-ui/Button';
import Home from './container/home'
import Projects from './container/projects'
import './w3css.css';

const history = createBrowserHistory()
class App extends Component {
  render() {
    const{ classes }=this.props;
    return (
      <div className="app">
      <Router history={history}>
        <div >
        <div className="w3-bar w3-black w3-large" >
          <Button className="w3-bar-item w3-button w3-text-white" component={Link} to="/website">
          <b>HOME</b>
          </Button>
          <Button className="w3-bar-item w3-button w3-text-white" component={Link} to="/projects">
          <b>PROJECTS</b>
          </Button>
          <Button className="w3-bar-item w3-button w3-text-white">
          <b>RESUME</b>
          </Button>
          <Button className="w3-bar-item w3-button w3-text-white">
          <b>BLOG</b>
          </Button>
         </div>
          <Route exact path="/" component={Home}/>
          <Route path="/website" component={Home}/>
          <Route path="/projects" component={Projects}/>
        </div>
      </Router>
    </div>
    );
  }
}

export default App;
