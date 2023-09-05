import React from "react";
import { Link } from 'react-router-dom';
import "./Home.css"; // Import the CSS file for styling

function Home() {
	const link = "https://sjinnovation.com";
	const target = "_blank";

	return (
		<div className="container">



<div>
  <h1>Home</h1>
  <Link to="/register">Register</Link>
  {' '} {}
  <Link to="/login">Login</Link>
</div>


			<h1>SJ Innovation LLC</h1>
			<p>
				<b>Front-end</b>: React.js v17+ with RRDv6+
			</p>
			<p>
				<b>Back-end</b>: Node.js, Express.js
			</p>
			<p>
				<b>Database</b>: MongoDB Atlas with Mongoose ODM
			</p>
			<p>
				<b>Developed By</b>: Sajjad Hossain
				<p>
					<a href={link} target={target}>
					
					</a>
				</p>
			</p>
		</div>
	);
}

export default Home;
