import React, { Component } from 'react';
import { Router, Route  } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Home from './container/home';
import Projects from './container/projects';
import './w3css.css';

const history = createBrowserHistory()

class App extends Component {
  render() {
    const{ classes }=this.props;
    return (
      <div className="app">
      <Router history={history}>
        <div >
        <div class="w3-bar w3-black w3-large">
          <a href="/" className="w3-bar-item w3-button">Home</a>
          <a href="/projects" className="w3-bar-item w3-button">Projects</a>
          <a href="/" className="w3-bar-item w3-button">Resume</a>
          <a href="/" className="w3-bar-item w3-button">Blog</a>
        </div>
          <Route exact path="/" component={Home}/>
          <Route path="/projects" component={Projects}/>
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

export default App;
