import React, { Component } from 'react';
import EmailIcon from 'material-ui-icons/Email';
import PhoneIcon from 'material-ui-icons/Phone';

class Contact extends Component {
  render() {
    return (
      <div className="content">
      
      	<p className="contact">
	        <EmailIcon/>: sanjayshetty2015@gmail.com
        </p>

        <p className="contact">
	        <PhoneIcon/>: 8884259662 
        </p>

        <p className="contact">
	        Facebook: <a href="https://www.facebook.com/sanjay.shetty.1800?ref=br_rs">Sanjay Shetty</a>
        </p>
        <p className="contact">
          Git repo: <a href="https://github.com/sanjayashokshetty">Projects</a>
        </p>

      </div>
    );
  }
}

export default Contact;
