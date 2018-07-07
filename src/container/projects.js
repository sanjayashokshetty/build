import React from 'react';
import '../w3css.css'
function Projects(props){
	return(
		<div className="w3-light-grey">
			<div class="w3-container w3-card w3-indigo">
  				<h1>Projects</h1>
				{/*projects*/}
			</div>
			<div className="w3-row w3-mobile">
				<div className="w3-col w3-blue w3-card m6 l8 w3-margin" style={{"maxWidth":"400px"}}>
					<h2 className="w3-margin">Face-Emotion-Detection</h2>
					<p className="w3-margin">Its an API which recieves pictures and return the emotion using pretrain CNN network</p>
					<a href="https://github.com/sanjayashokshetty" className="w3-button w3-round w3-white w3-margin w3-small">Github</a> 
				</div>
				<div className="w3-col w3-orange w3-card m6 l8 w3-margin" style={{"maxWidth":"400px"}}>
					<h2 className="w3-margin">Propensity To Buy</h2>
					<p className="w3-margin">Its pretrained model build using adaboost classifier which predicts whether a person will buy a specific product or not.</p>
					<a href="https://github.com/sanjayashokshetty" className="w3-button w3-round w3-white w3-margin w3-small">Github</a> 
				</div>
				<div className="w3-col w3-yellow w3-card m6 l8 w3-margin" style={{"maxWidth":"400px"}}>
					<h2 className="w3-margin">Query Answer Recommend</h2>
					<p className="w3-margin">Trained model which uses cosine similarity to recommend answers to customer queries.</p>
					<a href="https://github.com/sanjayashokshetty" className="w3-button w3-round w3-white w3-margin w3-small">Github</a> 
				</div>
				<div className="w3-col w3-purple w3-card m6 l8 w3-margin" style={{"maxWidth":"400px"}}>
					<h2 className="w3-margin">Restaurant Search</h2>
					<p className="w3-margin">Its a java and sql based project helps different users to search hotels,give and view rewiews.</p>
					<a href="https://github.com/sanjayashokshetty" className="w3-button w3-round w3-white w3-margin w3-small">Github</a> 
				</div>
				<div className="w3-col w3-khaki w3-card m6 l8 w3-margin" style={{"maxWidth":"400px"}}>
					<h2 className="w3-margin">File_archiver</h2>
					<p className="w3-margin">This provides the basic functionalities that git provides like editing the files and branch the repository. It saves space by using Persistent data structure</p>
					<a href="https://github.com/sanjayashokshetty" className="w3-button w3-round w3-white w3-margin w3-small">Github</a> 
				</div>
				<div className="w3-col w3-lime w3-card m6 l8 w3-margin" style={{"maxWidth":"400px"}}>
					<h2 className="w3-margin">Personal Website</h2>
					<p className="w3-margin">Built using Reactjs,html,w3css.</p>
					<a href="https://github.com/sanjayashokshetty" className="w3-button w3-round w3-white w3-margin w3-small">Github</a> 
				</div>
			</div>
		</div>
	);
}


export default Projects;
