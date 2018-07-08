import React from 'react';
import '../w3css.css';
import profilepic from "../images/profile.jpeg";

var imgStyle = {
    height: '40vh',
    maxHeight: '500px'
}

function Home(props){
	return(
		<div className="w3-light-grey">
			<div className="w3-content w3-margin-top" style={{"maxWidth":"1400px"}}>

			{/* The Grid */}
			<div className="w3-row-padding">
			
				{/* Left Column */}
				<div className="w3-third">
				
				<div className="w3-white w3-text-grey w3-card-4">
					<div className="w3-display-container">
					<img src={profilepic} style={{"width":"100%"}} alt="Avatar"/><br/>
					<div className="w3-container w3-text-black">
						<h2>Sanjay Ashok Shetty</h2>
					</div>
					</div>
					<div className="w3-container">
					<p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Data Analist and Web developer</p>
					<p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>Surathkal, Mangalore</p>
					<p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>sanjayshetty2015@gmail.com</p>
					<p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>9448518852</p>
					<hr/>

					<p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
					<p>Machine Learning</p>
					<div className="w3-light-grey w3-round-xlarge w3-small">
						<div className="w3-container w3-center w3-round-xlarge w3-teal" style={{"width":"70%"}}>70%</div>
					</div>
					<p>Web Development</p>
					<div className="w3-light-grey w3-round-xlarge w3-small">
						<div className="w3-container w3-center w3-round-xlarge w3-teal" style={{"width":"60%"}}>
						<div className="w3-center w3-text-white">60%</div>
						</div>
					</div>
					<br/>
					</div>
				</div><br/>

				{/* End Left Column */}
				</div>

				{/* Right Column */}
				<div className="w3-twothird">
				
				<div className="w3-container w3-card w3-white w3-margin-bottom">
					<h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>
					<div className="w3-container">
					<h5 className="w3-opacity"><b>Data Analyst at Perfios</b></h5>
					<h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>May 15 2018 - July 4 2018</h6>
					<p>Worked as Data Analyst during which I have completed a projects 'Propensity to Buy' and 'customer service recoomendation'</p>
					<hr/>
					</div>
				</div>

				<div className="w3-container w3-card w3-white">
					<h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
					<div className="w3-container">
					<h5 className="w3-opacity"><b>NITK Surathkal</b></h5>
					<h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2016 - Present</h6>
					<p>Bachelor Degree</p><br/>
					<p>Btech in Information Technology</p>
					</div>
				</div>

				{/* End Right Column */}
				</div>
				
			{/* End Grid */}
			</div>
			
			{/* End Page Container */}
			</div>
		</div>
	);
}


export default Home;
