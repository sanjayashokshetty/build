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
          <a href="https://drive.google.com/open?id=1OIbpYJsWKuuw82YHGgI2cnh8WAgAkepe"><b>RESUME</b></a>
          </Button>
          <Button className="w3-bar-item w3-button w3-text-white">
          <a href="https://medium.com/@sanjay1998"><b>BLOG</b></a>
          </Button>
         </div>
          <Route exact path="/" component={Home}/>
          <Route path="/website" component={Home}/>
          <Route path="/projects" component={Projects}/>
        </div>
      </Router>
      <footer class="w3-container w3-black w3-center w3-margin-top">
        <p>Find me on social media.</p>
        <a href="https://www.facebook.com/sanjay.shetty.1800"><i class="fa fa-facebook-official w3-hover-opacity w3-margin" style={{"font-size":"28px"}}></i></a>
        <a href="https://www.linkedin.com/in/sanjay-shetty-2a868a154/"></a><i class="fa fa-instagram w3-hover-opacity w3-margin" style={{"font-size":"28px"}}></i>
        <a href="https://www.instagram.com/sanjay___shetty/"><i class="fa fa-linkedin w3-hover-opacity w3-margin" style={{"font-size":"28px"}}></i></a>
      </footer>
    </div>
    );
  }
}

export default App;
