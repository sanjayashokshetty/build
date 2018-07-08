import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Router, Route  } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Button from 'material-ui/Button';
import Home from './container/home'
import Projects from './container/projects'
import { withStyles } from 'material-ui/styles';
import './w3css.css';

const history = createBrowserHistory()
const styles = () => ({
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
    float: 'left',
    display:'inline-block',
    paddingTop:15,
  },
  ulele:{
    width:'100%',
    paddingLeft: '0px',
    display: 'table',
    backgroundColor: '#4a3e43',
  },

});
class App extends Component {
  render() {
    const{ classes }=this.props;
    return (
    <div className="app">
    <Router history={history}>
      <div >
      <div className="w3-bar w3-black w3-large">
        <a href="/website" className="w3-bar-item w3-button" >Home</a>
        <a href="/website/projects" className="w3-bar-item w3-button" >Projects</a>
        <a href="/" className="w3-bar-item w3-button">Resume</a>
        <a href="/" className="w3-bar-item w3-button">Blog</a>
      </div>
        <Route exact path="/website" component={Home}/>
        <Route path="/website" component={Home}/>
        <Route path="/website/projects" component={Projects}/>
      </div>
    </Router>
      <footer className="w3-container w3-black w3-center w3-margin-top">
      <p>Find me on social media.</p>
      <a href="https://m.facebook.com/profile.php?id=100003754409071&ref=content_filter"><i className="fa fa-facebook-official w3-hover-opacity" style={{"font-size":"24px"}}></i></a>
      <i className="fa fa-instagram w3-hover-opacity" style={{"font-size":"24px"}}> </i>
      <i className="fa fa-linkedin w3-hover-opacity" style={{"font-size":"24px"}}> </i>
      </footer>
    </div>
    );
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(App);
