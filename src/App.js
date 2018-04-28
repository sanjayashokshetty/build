import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Router, Route  } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Button from 'material-ui/Button';
import Home from './container/home'
import Skills from './container/skills'
import Contact from './container/contact'
import Projects from './container/projects'
import Resume from './container/resume'
import { withStyles } from 'material-ui/styles';


const history = createBrowserHistory()
const styles = () => ({
  header:{
    align:'center',
    backgroundColor: '#424344',
    height: 50,
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 25,
  },
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
      <div className={classes.header}>Hi there,I am Sanjay Shetty</div>
      <Router history={history}>
        <div >
        <ul className={classes.ulele}>
          <Button className={classes.button} component={Link} to="/website">
          HOME
          </Button>
          <Button className={classes.button} component={Link} to="/skills">
          SKILLS
          </Button>
          <Button className={classes.button} component={Link} to="/projects">
          PROJECTS
          </Button>
          <Button className={classes.button} component={Link} to="/resume">
          RESUME
          </Button>
          <Button className={classes.button} component={Link} to="/contact">
          CONTACT
          </Button>
         </ul>
          <Route exact path="/" component={Home}/>
          <Route path="/website" component={Home}/>
          <Route path="/skills" component={Skills}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/resume" component={Resume}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </Router>
      </div>
    );
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(App);
