import React from 'react';
function Projects(props){
	return(
		<div>
		<h2>PROJECTS DONE</h2>
		<h3>File_archiver:[python, data structures]</h3>
 		<p>This provides the basic functionalities that git provides like editing the files and branch the repository. It saves space by using Persistent data structure i.e. making copies of the affected files. All operations are implements in log (n) time complexity. Persistent data structure is used implemented it using python.</p>
		<h3>Restaurant_search:[java, sql server]</h3>
  		<p>Provides user and admin login. Admin can login and add new restaurants to the database. User can login or signup and search for a restaurant using pin code or place and give review and check the reviews. Java, SQL and java swing is used.</p>
		<h3>Tile_swipe game: [bash]</h3>
    	<p>This is puzzle game user has the option to choose a matrix between 3 * 3 to 9 * 9.
		 The numbers in the matrix will be in descending order and the last tile will be empty.
		 User has to swipe the tiles and bring it to ascending order.</p> 
		<h3>To_do_app_list mini project:[web app using react and JavaScript]</h3>
 		<p>Creating a dynamic to do app list using Reactjs and JavaScript and realising the requirement of framework.</p>
		<h4>Git repo:</h4> <a href="https://github.com/sanjayashokshetty">LINK TO PROJECTS REPOSITORY</a>
		</div>
	);
}


export default Projects;
